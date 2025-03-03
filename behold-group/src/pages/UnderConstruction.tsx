import React from "react";
import DefaultLayout from "@/layouts/default";
import { useNavigate } from "react-router-dom";

const UnderConstruction: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Goes back one entry in the browser history
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-3xl font-bold mb-4">🚧 Under Construction 🚧</h1>
        <p className="text-lg text-gray-600 mb-6">
          This page is currently being built. Check back soon!
        </p>
        <button
          onClick={handleGoBack}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Go Back
        </button>
      </div>
    </DefaultLayout>
  );
};

export default UnderConstruction;
