import { useState } from "react";
import { scholarships } from "../data/mockData";
import { Calendar, IndianRupee, Award, UserCheck } from "lucide-react";

export default function Scholarship() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-4 md:px-16 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Scholarship Opportunities
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore funding opportunities to support your educational journey.
            Find scholarships that match your profile and aspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scholarships.map((scholarship) => (
            <div
              key={scholarship.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={scholarship.image}
                  alt={scholarship.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-[#FAD502] shadow-sm">
                  {scholarship.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {scholarship.title}
                  </h2>
                  <p className="text-sm text-gray-500 font-medium">
                    Provided by {scholarship.provider}
                  </p>
                </div>

                <p className="text-gray-600 mb-6 line-clamp-3 flex-1">
                  {scholarship.description}
                </p>

                <div className="space-y-3 border-t border-gray-100 pt-4">
                  <div className="flex items-center text-gray-700">
                    <IndianRupee size={18} className="text-green-600 mr-2" />
                    <span className="font-semibold">{scholarship.amount}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Calendar size={18} className="text-blue-600 mr-2" />
                    <span>Deadline: {scholarship.deadline}</span>
                  </div>
                  <div className="flex items-start text-gray-700">
                    <UserCheck
                      size={18}
                      className="text-purple-600 mr-2 mt-1 flex-shrink-0"
                    />
                    <span className="text-sm">{scholarship.eligibility}</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
