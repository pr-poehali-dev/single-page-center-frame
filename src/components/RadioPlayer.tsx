import React, { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";

const RadioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [currentTrack, setCurrentTrack] = useState("АвтоРадио Кинешма - Live");

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 shadow-2xl max-w-md w-full">
      <div className="text-center mb-4">
        <div className="text-gray-400 text-sm mb-2">В ЭФИРЕ</div>
        <div className="text-white font-medium">АвтоРадио Кинешма</div>
      </div>

      {/* Рабочий плеер */}
      <div className="bg-gray-900/50 rounded-md p-4 border border-gray-600/30">
        <audio
          ref={audioRef}
          src="https://radio.avtoradio.ru/avtoradio"
          preload="none"
          className="hidden"
        />

        {/* Информация о треке */}
        <div className="text-center mb-4">
          <div className="text-white text-sm font-medium mb-1">
            {currentTrack}
          </div>
          <div className="text-gray-400 text-xs">Прямой эфир</div>
        </div>

        {/* Кнопки управления */}
        <div className="flex items-center justify-center space-x-4 mb-4">
          <button
            onClick={togglePlay}
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3 transition-colors duration-200 shadow-lg"
          >
            <Icon name={isPlaying ? "Pause" : "Play"} size={20} />
          </button>
        </div>

        {/* Регулятор громкости */}
        <div className="flex items-center space-x-3">
          <Icon name="VolumeX" size={16} className="text-gray-400" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          />
          <Icon name="Volume2" size={16} className="text-gray-400" />
        </div>
      </div>

      <div className="mt-4 text-center">
        <div className="text-purple-400 text-sm font-medium">105.6 FM</div>
      </div>
    </div>
  );
};

export default RadioPlayer;
