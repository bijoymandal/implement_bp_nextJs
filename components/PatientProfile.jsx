
import Image from "next/image";
const PatientProfile = ({ patient }) => {
  console.log("patient in profile", patient);
  if (!patient || patient.length === 0) {
    return (
      <div className="flex items-center justify-center h-full bg-white shadow-md rounded-2xl">
        <p className="text-lg text-gray-400">Select a patient to view diagnosis history</p>
      </div>
    );
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };
  return (
    <>
      <div className="absolute top-[108px] left-[1100px] w-[340px] h-[750px] bg-[#Ffffff] p-3 rounded-xl shadow-md">
        <div className="max-w-md mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-3">
              <Image
                src={patient.profile_picture}
                alt={patient.name}
                width={200}
                height={200}
                className="object-cover rounded-full"
              />
            </div>
            <h2 className="mb-1 text-3xl font-bold text-gray-900">{patient.name}</h2>
          </div>

          <div className="space-y-4">
            <div className="p-2 bg-white rounded-xl">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 ">
                  <Image src="/image/BirthIcon.svg" alt="Schedule" width={40} height={40} />
                </div>
                <div className="flex-1">
                  <p className="mb-1 text-sm font-medium text-gray-500">Date Of Birth</p>
                  <p className="text-base font-semibold text-gray-900">{formatDate(patient.date_of_birth)}</p>
                </div>
              </div>
            </div>

            <div className="p-2 bg-white rounded-xl">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg ">
                  <Image src="/image/FemaleIcon.svg" alt="Schedule" width={40} height={40} />
                </div>
                <div className="flex-1">
                  <p className="mb-1 text-sm font-medium text-gray-500">Gender</p>
                  <p className="text-base font-semibold text-gray-900">{patient.gender}</p>
                </div>
              </div>
            </div>

            <div className="p-2 bg-white rounded-xl">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg ">
                  <Image src="/image/PhoneIcon.svg" alt="Schedule" width={40} height={40} />
                </div>
                <div className="flex-1">
                  <p className="mb-1 text-sm font-medium text-gray-500">Contact Info</p>
                  <p className="text-xs font-semibold text-gray-900">{patient.phone_number}</p>
                </div>
              </div>
            </div>

            <div className="p-2 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg ">
                  <Image src="/image/PhoneIcon.svg" alt="Schedule" width={40} height={40} />
                </div>
                <div className="flex-1">
                  <p className="mb-1 text-sm font-medium text-gray-500">Emergency Contacts</p>
                  <p className="text-base font-semibold text-gray-900">{patient.emergency_contact}</p>
                </div>
              </div>
            </div>

            <div className="p-2 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg ">
                  <Image src="/image/InsuranceIcon.svg" alt="Schedule" width={40} height={40} />
                </div>
                <div className="flex-1">
                  <p className="mb-1 text-sm font-medium text-gray-500">Insurance Provider</p>
                  <p className="text-base font-semibold text-gray-900">{patient.insurance_type}</p>
                </div>
              </div>
              <button className="w-full px-4 py-2 mt-4 text-black bg-[#01F0D0] rounded-3xl shadow-md hover:bg-[#01cbb7] transition-colors">
                Show All Information
              </button>
            </div>

          </div>
        </div>
      </div >
      <div className="absolute top-[880px] left-[1100px] w-[340px] h-[300px] bg-[#ffffff] p-3 rounded-xl shadow-md">
        <h2 className="mb-2 text-xl font-bold md:text-xl text-foreground">Lab Results</h2>

        {/* Scrollable container */}
        <div className="overflow-y-auto h-[250px] pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {patient.lab_results && patient.lab_results.length > 0 ? (
            patient.lab_results.map((result, index) => (
              <div
                key={result.id || index}
                className="grid grid-cols-[1fr_auto] gap-4 p-3 "
              >
                <div className="text-sm text-[#072635] w-full break-words whitespace-normal">
                  {result}
                </div>
                <div className="flex items-center justify-end">
                  <Image
                    src="/image/download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                    alt="Schedule"
                    width={20}
                    height={20}
                  />
                </div>
              </div>

            ))
          ) : (
            <p className="text-gray-500">No lab results available.</p>
          )}
        </div>
      </div>

    </>
  );
}

export default PatientProfile;