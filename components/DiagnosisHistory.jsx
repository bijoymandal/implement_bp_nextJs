'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Image from "next/image";

const DiagnosisHistory = ({ records, dgList }) => {
    console.log('🧠 Diagnosis Records:', records, dgList);

    if (!records || records.length === 0) {
        return (
            <div className="flex items-center justify-center h-full bg-white shadow-md rounded-2xl">
                <p className="text-lg text-gray-400">Select a patient to view diagnosis history</p>
            </div>
        );
    }

    const chartData = records.map((r) => ({
        month: `${r.month}, ${r.year}`,
        systolic: r.blood_pressure?.systolic?.value || 0,
        diastolic: r.blood_pressure?.diastolic?.value || 0,
    }));

    const latest = records[records.length - 1];

    const systolicAvg =
        records.reduce((sum, r) => sum + (r.blood_pressure?.systolic?.value || 0), 0) / records.length;
    const diastolicAvg =
        records.reduce((sum, r) => sum + (r.blood_pressure?.diastolic?.value || 0), 0) / records.length;

    const systolicStatus =
        latest.blood_pressure?.systolic?.value > systolicAvg ? 'higher' : 'lower';
    const diastolicStatus =
        latest.blood_pressure?.diastolic?.value > diastolicAvg ? 'higher' : 'lower';

    return (
        <>
            <div className="absolute top-[122px] left-[350px] w-[730px] h-[673px] bg-white rounded-2xl shadow-md p-6 overflow-y-auto">
                <h2 className="mb-6 text-xl font-bold md:text-2xl">Diagnosis History</h2>

                <div>

                    <div className="bg-[#F5F0FA] rounded-xl p-4 lg:p-6">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                            {/* Chart Section */}
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-gray-900">Blood Pressure</h3>
                                    <select className="px-3 py-1 text-sm rounded-lg">
                                        <option>Last 6 months</option>
                                        <option>Last 3 months</option>
                                        <option>Last year</option>
                                    </select>
                                </div>

                                <ResponsiveContainer width="100%" height={230}>
                                    <LineChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                        <XAxis dataKey="month" tick={{ fill: "#6B7280", fontSize: 12 }} tickLine={false} />
                                        <YAxis tick={{ fill: "#6B7280", fontSize: 12 }} tickLine={false} />
                                        <Tooltip />
                                        <Line
                                            type="monotone"
                                            dataKey="systolic"
                                            stroke="#C77DFF"
                                            strokeWidth={2}
                                            dot={{ fill: "#C77DFF", r: 4 }}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="diastolic"
                                            stroke="#7B61FF"
                                            strokeWidth={2}
                                            dot={{ fill: "#7B61FF", r: 4 }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Right Info Panel */}
                            <div className="flex flex-col justify-center p-4 lg:w-45 backdrop-blur-sm rounded-xl">
                                {/* Systolic */}
                                <div className="mb-4">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-3 h-3 rounded-full bg-[#C77DFF]" />
                                        <span className="text-sm font-medium text-gray-700">Systolic</span>
                                    </div>
                                    <p className="text-2xl font-bold text-gray-900">{latest.blood_pressure?.systolic?.value}</p>
                                    <p className={`flex items-center gap-1 text-sm text-black`}>
                                        {systolicStatus === 'higher' ? '▲' : '▼'}
                                        {systolicStatus === 'higher' ? 'Higher' : 'Lower'} than Average
                                    </p>
                                </div>

                                <hr className="my-2 border-gray-300/50" />

                                {/* Diastolic */}
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-3 h-3 rounded-full bg-[#7B61FF]" />
                                        <span className="text-sm font-medium text-gray-700">Diastolic</span>
                                    </div>
                                    <p className="text-2xl font-bold text-gray-900">{latest.blood_pressure?.diastolic?.value}</p>
                                    <p className={`flex items-center gap-1 text-sm text-black`}>
                                        {diastolicStatus === 'higher' ? '▲' : '▼'}
                                        {diastolicStatus === 'higher' ? 'Higher' : 'Lower'} than Average
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="grid grid-cols-1 gap-3 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-[#E0F3FA] rounded-[12px] p-4 md:p-6 flex flex-col items-start shadow">
                            <div className="flex items-center justify-center w-16 h-16 mb-3 bg-white rounded-full">
                                <Image src="/image/respiratory rate.svg" alt="Respiratory Rate" width={64} height={64} />
                            </div>
                            <p className="text-sm text-gray-600">Respiratory Rate</p>
                            <p className="text-3xl font-bold text-gray-900">{latest.respiratory_rate?.value} bpm</p>
                            <p className="text-xs text-gray-500">{latest.respiratory_rate?.levels}</p>
                        </div>

                        <div className="bg-[#FFE6E9] rounded-[12px] p-4 md:p-6 flex flex-col items-start shadow">
                            <div className="flex items-center justify-center w-16 h-16 mb-3 bg-white rounded-full">
                                <Image src="/image/temperature.svg" alt="Temperature" width={64} height={64} />
                            </div>
                            <p className="text-sm text-gray-600">Temperature</p>
                            <p className="text-3xl font-bold text-gray-900">{latest.temperature?.value}°F</p>
                            <p className="text-xs text-gray-500">{latest.temperature?.levels}</p>
                        </div>

                        <div className="bg-[#FFE6F1] rounded-[12px] p-4 md:p-6 flex flex-col items-start shadow">
                            <div className="flex items-center justify-center w-16 h-16 mb-3 bg-white rounded-full">
                                <Image src="/image/HeartBPM.svg" alt="Heart Rate" width={64} height={64} />
                            </div>
                            <p className="text-sm text-gray-600">Heart Rate</p>
                            <p className="text-3xl font-bold text-gray-900">{latest.heart_rate?.value} bpm</p>
                            <p className="text-xs text-gray-500">{latest.heart_rate?.levels}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-[827px] left-[350px] w-[730px] bg-white rounded-2xl shadow-md p-6">
                <h2 className="mb-4 text-xl font-bold">Diagnostic List</h2>
                <div className="grid grid-cols-3 gap-3 px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg">
                    <div>Problem/Diagnosis</div>
                    <div>Description</div>
                    <div>Status</div>
                </div>
                <div className="mt-3 space-y-3">
                    {
                        dgList && dgList.length > 0 ? (
                            dgList.map((result, index) => (
                                <div
                                    key={result.id || index}

                                    className="grid grid-cols-3 gap-4 py-2 text-sm text-gray-700">
                                    <div>{result.name}</div>
                                    <div>{result.description}</div>
                                    <div>{result.status}</div>
                                </div>
                            ))) : (
                            <p className="text-sm text-gray-500">No diagnostic records available.</p>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default DiagnosisHistory;
