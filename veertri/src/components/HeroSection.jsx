import { Play, Info, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ content }) => {
  const [isMuted, setIsMuted] = useState(true);

  if (!content) return null;

  return (
    <div className="relative h-[80vh] md:h-screen w-full">
      {/* Background Image/Video */}
      <div className="absolute inset-0">
        <img
          src={content.backdrop}
          alt={content.title}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center px-4 md:px-16 pt-20 pb-20 md:pb-0">
        <div className="max-w-2xl w-full">
          {/* Title */}
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-2 md:mb-4 leading-tight">
            {content.title}
          </h1>

          {/* Info */}
          <div className="flex items-center gap-2 md:gap-4 text-white mb-3 md:mb-4 text-sm md:text-base">
            <span className="text-green-500 font-semibold">
              {content.rating}
            </span>
            <span>{content.year}</span>
            <span>
              {content.duration || `${content.modules} Modules`}
            </span>
            <span className="border border-gray-400 px-1.5 py-0.5 text-xs md:text-sm rounded">HD</span>
          </div>

          {/* Description */}
          <p className="text-gray-200 text-sm md:text-lg mb-6 md:mb-8 line-clamp-3 md:line-clamp-4 max-w-xl drop-shadow-md">
            {content.description}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3 md:gap-4">
            <Link
              to={`/watch/${content.id}`}
              className="bg-[#FAD502] hover:bg-[#FAD502]/90 text-[#090D0E] font-bold px-5 md:px-8 py-2 md:py-3 rounded-md flex items-center gap-2 transition text-sm md:text-lg"
            >
              <Play size={18} className="md:w-6 md:h-6" fill="currentColor" />
              <span>Play</span>
            </Link>

            <Link
              to={`/watch/${content.id}`}
              className="bg-gray-500/70 hover:bg-gray-500/50 text-white font-semibold px-5 md:px-8 py-2 md:py-3 rounded-md flex items-center gap-2 transition text-sm md:text-lg backdrop-blur-sm"
            >
              <Info size={18} className="md:w-6 md:h-6" />
              <span>More Info</span>
            </Link>
          </div>

          {/* Genre tags */}
          <div className="mt-4 md:mt-6 flex items-center gap-2 text-xs md:text-sm">
            <span className="text-gray-400">Genres:</span>
            <span className="text-white font-medium">{content.genre}</span>
          </div>
        </div>
      </div>

      {/* Mute button */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-24 md:bottom-32 right-4 md:right-8 bg-transparent border border-white/50 hover:bg-white/10 text-white rounded-full p-2 md:p-3 transition z-20"
      >
        {isMuted ? <VolumeX size={20} className="md:w-6 md:h-6" /> : <Volume2 size={20} className="md:w-6 md:h-6" />}
      </button>
    </div>
  );
};

export default HeroSection;
