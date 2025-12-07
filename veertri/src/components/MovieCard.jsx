import { Link } from "react-router-dom";
import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";
import { useState } from "react";

const MovieCard = ({ item, isLarge = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/watch/${item.id}`}
      className={`relative flex-shrink-0 cursor-pointer transition-transform duration-300 ${
        isLarge ? "w-72" : "w-48"
      } ${isHovered ? "scale-110 z-10" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative rounded-md overflow-hidden">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-auto object-cover"
        />

        {/* Overlay on hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/60 flex items-end">
            <div className="p-4 w-full">
              <h3 className="text-white font-bold text-lg mb-2">
                {item.title}
              </h3>

              {/* Action buttons */}
              <div className="flex items-center gap-2 mb-2">
                <button className="bg-[#FAD502] hover:bg-[#FAD502]/80 text-[#090D0E] rounded-full p-2 transition">
                  <Play size={16} fill="currentColor" />
                </button>

                <button className="bg-[#090D0E] hover:bg-[#090D0E]/80 text-[#FAD502] rounded-full p-2 transition">
                  <Plus size={16} />
                </button>

                <button className="bg-[#090D0E] hover:bg-[#090D0E]/80 text-[#FAD502] rounded-full p-2 transition">
                  <ThumbsUp size={16} />
                </button>

                <button className="bg-[#090D0E] hover:bg-[#090D0E]/80 text-[#FAD502] rounded-full p-2 ml-auto transition">
                  <ChevronDown size={16} />
                </button>
              </div>

              {/* Info */}
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <span className="text-green-500 font-semibold">
                  {item.rating}
                </span>
                <span>{item.year}</span>
                <span>{item.duration || `${item.seasons} Seasons`}</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                <span className="border border-gray-500 px-1">HD</span>
                <span>{item.genre}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default MovieCard;
