import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";

const CategoryRow = ({ title, items, isLarge = false }) => {
  const rowRef = useRef(null);

  const scroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = direction === "left" ? -800 : 800;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="px-4 md:px-16 mb-8 relative group">
      {/* Category Title */}
      <h2 className="text-white text-2xl font-bold mb-4">{title}</h2>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-r-md opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-l-md opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight size={32} />
      </button>

      {/* Items Row */}
      <div
        ref={rowRef}
        className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item) => (
          <MovieCard key={item.id} item={item} isLarge={isLarge} />
        ))}
      </div>
    </div>
  );
};

export default CategoryRow;
