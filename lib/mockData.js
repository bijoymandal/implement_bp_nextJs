// src/lib/mockData.ts

export const patients = [
  { id: "1", name: "Emily Williams", gender: "Female", age: 18, image: "/image/Layer 1.png", initials: "EW" },
  { id: "2", name: "Ryan Johnson", gender: "Male", age: 45, image: "/image/Layer 2.png", initials: "RJ" },
  { id: "3", name: "Brandon Mitchell", gender: "Male", age: 36, image: "/image/Layer 3.png", initials: "BM" },
  { id: "4", name: "Jessica Taylor", gender: "Female", age: 28, image: "/image/Layer 4.png", initials: "JT" },
  { id: "5", name: "Samantha Johnson", gender: "Female", age: 56, image: "/image/Layer 5.png", initials: "SJ" },
  { id: "6", name: "Ashley Martinez", gender: "Female", age: 54, image: "/image/Layer 6.png", initials: "AM" },
  { id: "7", name: "Ashley Martinez", gender: "Female", age: 54, image: "/image/Layer 7.png", initials: "AM" },
  { id: "8", name: "Ashley Martinez", gender: "Female", age: 54, image: "/image/Layer 8.png", initials: "AM" },
  { id: "9", name: "Ashley Martinez", gender: "Female", age: 54, image: "/image/Layer 9.png", initials: "AM" },
  { id: "10", name: "Ashley Martinez", gender: "Female", age: 54, image: "/image/Layer 10.png", initials: "AM" },
  { id: "11", name: "Ashley Martinez", gender: "Female", age: 54, image: "/image/Layer 11.png", initials: "AM" },
];

// mock diagnosis records
export const mockDiagnosisRecords = [
  {
    id: "101",
    patient_id: "1",
    record_date: "2025-11-06",
    systolic: 120,
    diastolic: 80,
    respiratory_rate: 18,
    temperature: 98.6,
    heart_rate: 72,
    created_at: "2025-11-06T10:00:00Z",
  },
  {
    id: "102",
    patient_id: "1",
    record_date: "2025-11-05",
    systolic: 130,
    diastolic: 85,
    respiratory_rate: 19,
    temperature: 99.1,
    heart_rate: 74,
    created_at: "2025-11-05T10:00:00Z",
  },
  {
    id: "103",
    patient_id: "2",
    record_date: "2025-11-04",
    systolic: 115,
    diastolic: 75,
    respiratory_rate: 17,
    temperature: 98.4,
    heart_rate: 70,
    created_at: "2025-11-04T10:00:00Z",
  },
  {
    id: "104",
    patient_id: "3",
    record_date: "2025-11-03",
    systolic: 140,
    diastolic: 90,
    respiratory_rate: 20,
    temperature: 99.5,
    heart_rate: 78,
    created_at: "2025-11-03T10:00:00Z",
  },
];
