import React from "react";

const Gallery = () => {
  const projects = [
    {
      id: 1,
      title: "Веб-приложение",
      category: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Мобильное приложение",
      category: "Mobile Design",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Брендинг",
      category: "Brand Identity",
      image:
        "https://images.unsplash.com/photo-1558655146-364adaf9eedc?w=500&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Лендинг",
      category: "Web Design",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Дашборд",
      category: "Dashboard",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Иллюстрация",
      category: "Illustration",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=400&fit=crop",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Мои работы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Подборка последних проектов в области дизайна и разработки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
