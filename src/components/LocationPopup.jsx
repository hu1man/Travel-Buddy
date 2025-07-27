import React from 'react';

const LocationPopup = ({ onAllow, onDeny }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-sm w-full p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Allow Location Access</h2>
        <p className="mb-6">
          To provide you with the best route and directions, Travel Buddy needs access to your current location.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onAllow}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Allow
          </button>
          <button
            onClick={onDeny}
            className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded"
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationPopup;
