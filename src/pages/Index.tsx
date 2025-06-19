import React from "react";
import RadioHeader from "@/components/RadioHeader";
import RadioPlayer from "@/components/RadioPlayer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <RadioHeader />
        <div className="flex justify-center">
          <RadioPlayer />
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400/5 rounded-full blur-2xl"></div>
    </div>
  );
};

export default Index;
