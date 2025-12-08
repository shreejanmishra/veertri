import { Link } from "react-router-dom";
import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";
import { useState } from "react";

const MovieCard = ({ item, isLarge = false, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/watch/${item.id}`}
      className={`relative flex-shrink-0 cursor-pointer transition-transform duration-300 ${
        className ? className : isLarge ? "w-64 md:w-80" : "w-36 md:w-56"
      } ${isHovered ? "scale-110 z-10" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative rounded-md overflow-hidden">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full aspect-video object-cover"
        />

        {/* Overlay on hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/80 flex flex-col justify-end p-2 transition-opacity duration-300">
            <div className="w-full">
              <h3 className="text-white font-bold text-sm mb-1 line-clamp-1">
                {item.title}
              </h3>

              {/* Action buttons */}
              <div className="flex items-center gap-1 mb-1">
                <button className="bg-[#FAD502] hover:bg-[#FAD502]/80 text-[#090D0E] rounded-full p-1.5 transition">
                  <Play size={12} fill="currentColor" />
                </button>

                <button className="bg-[#090D0E] hover:bg-[#090D0E]/80 text-[#FAD502] rounded-full p-1.5 transition">
                  <Plus size={12} />
                </button>

                <button className="bg-[#090D0E] hover:bg-[#090D0E]/80 text-[#FAD502] rounded-full p-1.5 transition">
                  <ThumbsUp size={12} />
                </button>

                <button className="bg-[#090D0E] hover:bg-[#090D0E]/80 text-[#FAD502] rounded-full p-1.5 ml-auto transition">
                  <ChevronDown size={12} />
                </button>
              </div>

              {/* Info */}
              <div className="flex items-center gap-2 text-[10px] text-gray-300">
                <span className="text-green-500 font-semibold">
                  {item.rating}
                </span>
                <span>{item.year}</span>
                <span>{item.duration || `${item.seasons} Seasons`}</span>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-gray-400 mt-0.5">
                <span className="border border-gray-500 px-1 rounded-[2px]">
                  HD
                </span>
                <span className="line-clamp-1">{item.genre}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default MovieCard;
