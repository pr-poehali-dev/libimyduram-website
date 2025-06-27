import React from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
        любимые дуры
      </h1>

      <div className="w-full max-w-4xl">
        {/* 
          СПОСОБЫ ДОБАВЛЕНИЯ ВИДЕО:
          
          1. ЛОКАЛЬНЫЕ ВИДЕО ФАЙЛЫ:
          - Поместите видео в папку public/ (например: public/video.mp4)
          - Используйте: src="/video.mp4"
          
          2. ВНЕШНИЕ ССЫЛКИ:
          - Прямые ссылки на видео файлы
          - Используйте: src="https://example.com/video.mp4"
          
          3. YOUTUBE ВИДЕО:
          - Замените весь блок <video> на <iframe>
          - Код для YouTube: 
          <iframe 
            width="100%" 
            height="450" 
            src="https://www.youtube.com/embed/ВАШ_VIDEO_ID" 
            frameBorder="0" 
            allowFullScreen
          ></iframe>
        */}
        <video
          controls
          className="w-full h-auto rounded-lg shadow-2xl"
          poster="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=450&fit=crop"
        >
          {/* Замените src на путь к вашему видео */}
          <source src="/your-video.mp4" type="video/mp4" />
          {/* Дополнительные форматы для совместимости */}
          <source src="/your-video.webm" type="video/webm" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
    </div>
  );
};

export default Index;
