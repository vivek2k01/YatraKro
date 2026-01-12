import { useState } from "react";

const slides = [
  {
    title: "Blue Planet",
    subtitle: "Explore the beauty of Earth",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600",
  },
  {
    title: "Mars",
    subtitle: "The Red Planet Adventure",
    image:
      "https://images.unsplash.com/photo-1580428180121-8b5a4b0c2d9a?q=80&w=1600",
  },
  {
    title: "Jupiter",
    subtitle: "The Giant of the Solar System",
    image:
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1600",
  },
];

const PlanetCarousel = () => {
  const [active, setActive] = useState(0);

  const nextSlide = () =>
    setActive((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setActive((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 transition-all duration-1000 ease-in-out
            ${index === active ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110 z-0"}
          `}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Text Content */}
          <div className="absolute bottom-[15%] left-[10%] text-white max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-wide">
              {slide.title}
            </h1>
            <p className="text-lg opacity-90">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2
                   bg-white/20 backdrop-blur-md text-white
                   text-4xl px-4 py-2 rounded-full
                   hover:bg-white/30 transition z-20"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2
                   bg-white/20 backdrop-blur-md text-white
                   text-4xl px-4 py-2 rounded-full
                   hover:bg-white/30 transition z-20"
      >
        ›
      </button>
    </div>
  );
};

export default PlanetCarousel;
