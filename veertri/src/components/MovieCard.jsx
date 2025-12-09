import { Link } from "react-router-dom";
import { Play, Plus, ThumbsUp, ChevronDown, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const MovieCard = ({
  item,
  isLarge = false,
  className = "",
  isFirst = false,
  isLast = false,
  onToggleComplete,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const completedVideos = JSON.parse(
      localStorage.getItem("completedVideos") || "[]"
    );
    setIsCompleted(completedVideos.includes(item.id));
  }, [item.id]);

  const handleToggleComplete = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const completedVideos = JSON.parse(
      localStorage.getItem("completedVideos") || "[]"
    );
    let newCompletedVideos;

    if (completedVideos.includes(item.id)) {
      newCompletedVideos = completedVideos.filter((id) => id !== item.id);
    } else {
      newCompletedVideos = [...completedVideos, item.id];
    }

    localStorage.setItem("completedVideos", JSON.stringify(newCompletedVideos));
    setIsCompleted(!isCompleted);

    if (onToggleComplete) {
      onToggleComplete();
    }
  };

  return (
    <Link
      to={`/watch/${item.id}`}
      className={`relative flex-shrink-0 cursor-pointer transition-all duration-300 ease-in-out ${
        className ? className : isLarge ? "w-64 md:w-80" : "w-36 md:w-56"
      } ${
        isHovered
          ? "scale-110 z-10 shadow-[0_0_25px_rgba(250,213,2,0.4)]"
          : "shadow-lg"
      } ${isFirst ? "origin-left" : isLast ? "origin-right" : "origin-center"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <div
        className={`relative rounded-xl overflow-hidden bg-gray-900 transition-all duration-300 ${
          isHovered ? "ring-2 ring-[#FAD502]" : "ring-1 ring-white/10"
        }`}
      >
        <img
          src={item.thumbnail}
          alt={item.title}
          className={`w-full aspect-video object-cover transition-transform duration-500 ${
            isHovered ? "scale-105" : ""
          }`}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-3 transition-opacity duration-300">
          {/* Completion Checkbox - Always visible if completed, or on hover */}
          <button
            onClick={handleToggleComplete}
            className={`absolute top-2 right-2 p-1.5 rounded-full transition-all duration-300 z-20 ${
              isCompleted
                ? "bg-green-500 text-white opacity-100"
                : `bg-black/50 text-white hover:bg-green-500/50 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`
            }`}
            title={isCompleted ? "Mark as incomplete" : "Mark as complete"}
          >
            <CheckCircle size={16} />
          </button>

          <div className="w-full">
            <h3 className="text-white font-bold text-sm mb-2 line-clamp-2 leading-tight drop-shadow-md">
              {item.title}
            </h3>

            {/* Action buttons - Only visible on hover to reduce clutter */}
            <div
              className={`flex items-center gap-2 mb-2 transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
              }`}
            >
              <button className="bg-[#FAD502] hover:bg-[#FAD502]/90 text-[#090D0E] rounded-full p-1.5 transition shadow-sm transform hover:scale-110">
                <Play size={12} fill="currentColor" />
              </button>

              <button className="bg-[#2a2a2a] hover:bg-[#3a3a3a] border border-gray-600 text-white rounded-full p-1.5 transition shadow-sm transform hover:scale-110">
                <Plus size={12} />
              </button>

              <button className="bg-[#2a2a2a] hover:bg-[#3a3a3a] border border-gray-600 text-white rounded-full p-1.5 transition shadow-sm transform hover:scale-110">
                <ThumbsUp size={12} />
              </button>

              <button className="bg-[#2a2a2a] hover:bg-[#3a3a3a] border border-gray-600 text-white rounded-full p-1.5 ml-auto transition shadow-sm transform hover:scale-110">
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
              <span className="border border-gray-500 px-1 rounded-[2px] ml-auto">
                HD
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
