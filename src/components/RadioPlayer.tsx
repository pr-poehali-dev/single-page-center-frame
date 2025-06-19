import React from "react";

const RadioPlayer = () => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 shadow-2xl max-w-md w-full">
      <div className="text-center mb-4">
        <div className="text-gray-400 text-sm mb-2">В ЭФИРЕ</div>
        <div className="text-white font-medium">АвтоРадио Кинешма</div>
      </div>

      {/* Место для кода плеера */}
      <div className="bg-gray-900/50 rounded-md p-4 border border-gray-600/30">
        <div className="text-gray-500 text-sm text-center">
          Здесь будет код плеера
        </div>
        <div className="mt-2 text-xs text-gray-600 text-center">
          Вставьте код плеера в этот блок
        </div>
      </div>

      <div className="mt-4 text-center">
        <div className="text-purple-400 text-sm font-medium">105.6 FM</div>
      </div>
    </div>
  );
};

export default RadioPlayer;
