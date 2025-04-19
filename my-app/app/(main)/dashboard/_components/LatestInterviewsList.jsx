"use client";

import React from "react";
import { Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const LatestInterviewsList = () => {
  return (
    <div className="w-full px-6 py-10">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Previously Created Interviews
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Track your mock interviews and create new ones anytime.
        </p>
      </div>

      {/* Empty State */}
      <div className="mt-10 flex flex-col items-center justify-center text-center gap-4 px-6 py-10 bg-white rounded-2xl shadow-lg border border-gray-200 transition-all duration-300">
        <Video className="w-8 h-8 text-blue-500" />
        <h3 className="text-lg font-medium text-gray-800">
          No Interviews Found
        </h3>
        <p className="text-sm text-gray-500 max-w-md">
          You haven’t created any interviews yet. Click the button below to get started with your first mock session.
        </p>
        <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition-all">
          + Create New Interview
        </Button>
      </div>
    </div>
  );
};

export default LatestInterviewsList;
