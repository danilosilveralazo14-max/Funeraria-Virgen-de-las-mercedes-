import { useEffect, useState } from "react";

export default function Carousel({ slides, intervalMs = 5000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [slides.length, intervalMs]);

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`transition-opacity duration-700 ${
            i === index ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
          }`}
        >
          {slide}
        </div>
      ))}

      {slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir a la diapositiva ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-dorado" : "w-2 bg-marfil-soft/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
