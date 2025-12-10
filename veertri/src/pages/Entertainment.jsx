import React, { useState, useEffect, useRef } from "react";
import HeroSection from "../components/HeroSection";
import MovieCard from "../components/MovieCard";
import { getEntertainmentContent } from "../data/mockData";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import entertainmentBg from "../assets/entertainmentBg2.png";

const ContentRow = ({ title, items, categoryId }) => {
  const rowRef = useRef(null);

  const scroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = direction === "left" ? -800 : 800;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="px-4 md:px-16 mb-12">
      <div className="dark:bg-gray-900/40 bg-white/10 backdrop-blur-sm border dark:border-gray-800 border-gray-200 rounded-2xl p-4 md:p-6 shadow-xl relative group transition-all duration-300 hover:shadow-2xl hover:border-gray-300 dark:hover:border-gray-700">
        {/* Header */}
        <div className="mb-4 px-1 flex items-center justify-between">
          <Link
            to={`/entertainment/${categoryId}`}
            className="group/title flex items-center gap-3"
          >
            <h2 className="dark:text-white text-gray-200 text-xl md:text-2xl font-bold tracking-wide uppercase flex items-center gap-3 transition-colors duration-300 group-hover/title:text-[#FAD502]">
              <span className="w-1.5 h-6 md:h-8 bg-[#FAD502] rounded-full block shadow-[0_0_10px_#FAD502]"></span>
              {title}
            </h2>
            <span className="opacity-0 group-hover/title:opacity-100 transition-opacity duration-300 text-[#FAD502]">
              <ArrowRight size={24} />
            </span>
          </Link>
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:block absolute left-2 top-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden md:block absolute right-2 top-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight size={24} />
        </button>

        {/* Content Row */}
        <div
          ref={rowRef}
          className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item) => (
            <div key={item.id} className="flex-none w-[200px] md:w-[280px]">
              <MovieCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Entertainment = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const data = getEntertainmentContent();
    setContent(data);
  }, []);

  if (!content) return null;

  return (
    <div
      className="min-h-screen transition-colors duration-300 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${entertainmentBg})` }}
    >
      <div className="min-h-screen dark:bg-black/50 dark:backdrop-blur-sm transition-colors duration-300 pt-24 pb-20">
        <div className="px-4 md:px-16 mb-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-gray-800">
            <HeroSection content={content.featured} isCompact={true} />
          </div>
        </div>

        <div>
          {content.categories.map((category, index) => (
            <ContentRow
              key={index}
              title={category.title}
              items={category.items}
              categoryId={category.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
