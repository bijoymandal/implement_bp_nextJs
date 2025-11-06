'use client';

import { useState, useEffect } from 'react';
import SidebarPatint from "@/components/SidebarPatint";
import DiagnosisHistory  from '@/components/DiagnosisHistory';
import PatientProfile from '@/components/PatientProfile';



export default function Home() {
  const [patients, setPatients] = useState([]);
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  const [diagnosisRecords, setDiagnosisRecords] = useState(null);
  const [diagnososList, setDiagnosisList] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileProfile, setShowMobileProfile] = useState(false);

  useEffect(() => {
    getPatient();
  }, []);

  useEffect(() => {
    if (selectedPatientId) {
      fetchDiagnosisRecords(selectedPatientId);
      console.log('selectedPatientId', selectedPatientId);
      setShowMobileMenu(false);
    }
  }, [selectedPatientId]);



  const getPatient = async () =>{
            const username = "coalition";
            const password = "skills-test";
            const authHeader = "Basic " + btoa(`${username}:${password}`);
            // console.log(authHeader);

            try {
                const res = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
                    method: "GET",
                    headers: {
                        Authorization: authHeader,
                    },
                    cache: "no-store", // ensures fresh data in Next.js 13/14 app router
                });
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                console.log('data', data);
                const patientsWithIds = data.map((p, index) => ({
                  ...p,
                  id: `patient-${index}`,
                }));

                setPatients(patientsWithIds);

                if (patientsWithIds?.length > 3) {
                  setSelectedPatientId(data[3]);
                }


            }
            catch (error) {
                console.error("log error", error);
            }
        }
  const fetchDiagnosisRecords = (patientId) => {
    if(patientId){
      setDiagnosisRecords(patientId.diagnosis_history||[]);
      setDiagnosisList(patientId.diagnostic_list||[]);

    }
    else{
      setDiagnosisRecords([]);
      setDiagnosisList([]);
    }
  }

  const selectedPatient = selectedPatientId || null;
  console.log("Selected Patient:", selectedPatientId);

  return (
    <div className="flex h-screen mt-4 bg-white">
      {/* Mobile Header */}
      

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar: Patient List */}
        <aside
          
        >
          <SidebarPatint 
            patients={patients}
            selectedPatientId={selectedPatientId}
            onSelectPatient={setSelectedPatientId} />
        </aside>

        {showMobileMenu && (
          <div
            className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setShowMobileMenu(false)}
          />
        )}

        {/* Center: Diagnosis History */}
        <main className="flex-1 overflow-hidden">
          <DiagnosisHistory records={diagnosisRecords} dgList={diagnososList}/>
        </main>

        {/* Right Sidebar: Patient Profile */}
        <aside
        >
          <PatientProfile patient={selectedPatient} />
        </aside>

        {showMobileProfile && (
          <div
            className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setShowMobileProfile(false)}
          />
        )}
      </div>
    </div>
  );
}
