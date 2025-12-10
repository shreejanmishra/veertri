import { Link } from "react-router-dom";
import { Play, Clock, Star, Calendar, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const MovieCard = ({
  item,
  isLarge = false,
  className = "",
  onToggleComplete,
}) => {
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
      className={`group/card relative flex flex-col h-full bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
        className ? className : isLarge ? "w-80 md:w-96" : "w-64 md:w-72"
      } flex-shrink-0`}
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
          <div className="bg-[#FAD502] text-black p-3 rounded-full shadow-lg transform scale-75 group-hover/card:scale-100 transition-transform duration-300">
            <Play size={24} fill="currentColor" />
          </div>
        </div>

        {/* Completion Status */}
        <button
          onClick={handleToggleComplete}
          className={`absolute top-2 right-2 p-1.5 rounded-full transition-all duration-300 z-20 ${
            isCompleted
              ? "bg-green-500 text-white opacity-100 shadow-md"
              : "bg-black/50 text-white hover:bg-green-500/50 opacity-0 group-hover/card:opacity-100"
          }`}
          title={isCompleted ? "Mark as incomplete" : "Mark as complete"}
        >
          <CheckCircle size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover/card:text-[#FAD502] transition-colors">
          {item.title}
        </h3>

        <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400 mb-3">
          <div className="flex items-center gap-1">
            <Star size={12} className="text-[#FAD502] fill-[#FAD502]" />
            <span>{item.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            <span>{item.year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{item.duration || `${item.seasons} Seasons`}</span>
          </div>
        </div>

        {/* Description - Optional, if available in item */}
        {item.description && (
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4 flex-grow">
            {item.description}
          </p>
        )}

        <div className="mt-auto pt-3 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
            HD
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
