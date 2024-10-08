import React from "react";

const BusinessCard = ({ fullName, description, interests }) => {
  return (
    <div className="p-3">
      <div className="flex gap-3 justify-center px-3 py-6 flex-col border border-gray-300 rounded-lg shadow-lg">
        <p className="text-lg font-bold">{fullName}</p>
        <p className="text-base">{description}</p>
        <p className="text-base font-bold">Interests</p>
        <div className="flex flex-col gap-1">
          {interests.map((interest, index) => {
            return (
              <p key={index} className="text-sm">
                {interest}
              </p>
            );
          })}
        </div>
        <div className="flex flex-row gap-4">
          <button className="bg-blue-600 px-3 py-2 rounded-md text-white">
            Linkedin
          </button>
          <button className="bg-blue-600 px-3 py-2 rounded-md text-white">
            Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
