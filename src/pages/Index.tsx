import React from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
        любимые дуры
      </h1>

      <div className="w-full max-w-4xl">
        <video
          controls
          className="w-full h-auto rounded-lg shadow-2xl"
          poster="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=450&fit=crop"
        >
          <source
            src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
            type="video/mp4"
          />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
    </div>
  );
};

export default Index;
