import React from "react";
import DefaultLayout from "@/layouts/default";

const UnderConstruction: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-3xl font-bold mb-4">🚧 Under Construction 🚧</h1>
        <p className="text-lg text-gray-600">
          This page is currently being built. Check back soon!
        </p>
      </div>
    </DefaultLayout>
  );
};

export default UnderConstruction;
