import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    Widget: any;
  }
}

const RadioPlayer = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    const loadWidget = () => {
      if (window.Widget && widgetRef.current) {
        const widget = new window.Widget({});
        widget.create({
          url: "https://example-radio.com",
          place: "div3ac70cf0db81c1fe65edbf83fe76ce45",
          widgetId: "3ac70cf0db81c1fe65edbf83fe76ce45",
          id: "100",
          city: "494",
          format: "AAC",
          quality: "64",
          type: "channel",
          cover: 1,
          control: 1,
          title: 1,
          user: 1,
          background: "000000",
          text: "00ddff",
          icon: "000000",
          height: "100px",
          width: "100%",
        });
      }
    };

    if (!scriptLoadedRef.current) {
      const script = document.createElement("script");
      script.src = "https://101.ru/static/js/library/widget/widget.js";
      script.async = true;
      script.onload = () => {
        scriptLoadedRef.current = true;
        loadWidget();
      };
      document.head.appendChild(script);
    } else {
      loadWidget();
    }

    return () => {
      // Cleanup if needed
      if (widgetRef.current) {
        widgetRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 shadow-2xl max-w-md w-full">
      <div className="text-center mb-4">
        <div className="text-gray-400 text-sm mb-2">В ЭФИРЕ</div>
        <div className="text-white font-medium">Онлайн Радио</div>
      </div>

      <div className="bg-gray-900/50 rounded-md p-4 border border-gray-600/30">
        <div
          id="div3ac70cf0db81c1fe65edbf83fe76ce45"
          ref={widgetRef}
          style={{ width: "100%", height: "100px" }}
        />
      </div>

      <div className="mt-4 text-center">
        <div className="text-purple-400 text-sm font-medium">Радио Плеер</div>
      </div>
    </div>
  );
};

export default RadioPlayer;
