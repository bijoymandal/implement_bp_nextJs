"use client";

import { Search, MoreHorizontal } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";


const SidebarPatint = ({ patients, selectedPatientId, onSelectedPatient }) => {


    return (
        <div
            className="
      fixed top-[122px] left-[18px]
      w-[367px] h-[1054px]
      lg:w-80 lg:h-auto lg:min-h-[600px]
      bg-white rounded-2xl
      p-3 md:p-3
      shadow-lg
      overflow-y-auto
      scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
      z-10"
        >
            {/* Header Section */}
            <div className="mb-5 flex items-center justify-between">
                <h2 className="text-[14px] md:text-lg font-bold text-[#072635] leading-[19px]">
                    Patients
                </h2>
                <Search className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700" />
            </div>

            {/* Scrollable List */}
            <ScrollArea className="h-[400px] lg:h-[calc(100vh-180px)]">
                <div className="space-y-2">
                    {patients.map((patient, index) => (
                        <div
                            key={patient.id || `${patient.name}-${index}`}
                            onClick={() => onSelectedPatient(patient.id)}
                            className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-200 ${patient.name === "Jessica Taylor"
                                ? "bg-[#E6F7F4]"
                                : "hover:bg-gray-100"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <Image
                                    src={patient.profile_picture}
                                    alt={patient.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-bold text-[14px] text-[#072635] leading-[19px]">
                                        {patient.name}
                                    </p>
                                    <p className="text-[12px] text-gray-500">
                                        {patient.gender}, {patient.age}
                                    </p>
                                </div>
                            </div>
                            <MoreHorizontal className="h-5 w-5 text-gray-500" />
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
};

export default SidebarPatint;
