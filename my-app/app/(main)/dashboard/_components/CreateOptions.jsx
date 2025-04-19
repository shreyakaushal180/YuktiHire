import React from "react";
import { PhoneCallIcon, VideoIcon } from "lucide-react";

function CreateOptions() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
      {/* Video Interview Option */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer">
        <div className="bg-blue-50 text-blue-600 rounded-xl p-3 inline-flex mb-4">
          <VideoIcon className="w-6 h-6" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          Create New Interview
        </h2>
        <p className="text-sm text-gray-500">
          Create AI-driven interviews and schedule them with candidates.
        </p>
      </div>

      {/* Phone Call Option */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer">
        <div className="bg-blue-50 text-blue-600 rounded-xl p-3 inline-flex mb-4">
          <PhoneCallIcon className="w-6 h-6" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          Create Phone Screening Call
        </h2>
        <p className="text-sm text-gray-500">
          Schedule phone screening calls with candidates.
        </p>
      </div>
    </div>
  );
}

export default CreateOptions;
