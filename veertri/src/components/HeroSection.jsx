import { Play, Info, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ content }) => {
  const [isMuted, setIsMuted] = useState(true);

  if (!content) return null;

  return (
    <div className="relative h-screen">
      {/* Background Image/Video */}
      <div className="absolute inset-0">
        <img
          src={content.backdrop}
          alt={content.title}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center px-4 md:px-16 pt-20">
        <div className="max-w-2xl">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {content.title}
          </h1>

          {/* Info */}
          <div className="flex items-center gap-4 text-white mb-4">
            <span className="text-green-500 font-semibold text-xl">
              {content.rating}
            </span>
            <span className="text-lg">{content.year}</span>
            <span className="text-lg">
              {content.duration || `${content.modules} Modules`}
            </span>
            <span className="border border-gray-400 px-2 py-1 text-sm">HD</span>
          </div>

          {/* Description */}
          <p className="text-white text-base md:text-lg mb-8 line-clamp-3 max-w-xl">
            {content.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to={`/watch/${content.id}`}
              className="bg-[#FAD502] hover:bg-[#FAD502]/80 text-[#090D0E] font-semibold px-6 md:px-8 py-2 md:py-3 rounded-md flex items-center gap-2 transition text-sm md:text-base"
            >
              <Play size={20} className="md:w-6 md:h-6" fill="currentColor" />
              <span>Play</span>
            </Link>

            <Link
              to={`/watch/${content.id}`}
              className="bg-[#090D0E] hover:bg-[#090D0E]/80 text-[#FAD502] font-semibold px-6 md:px-8 py-2 md:py-3 rounded-md flex items-center gap-2 transition text-sm md:text-base"
            >
              <Info size={20} className="md:w-6 md:h-6" />
              <span>More Info</span>
            </Link>
          </div>

          {/* Genre tags */}
          <div className="mt-6 flex items-center gap-2">
            <span className="text-gray-400 text-sm">Genres:</span>
            <span className="text-white text-sm">{content.genre}</span>
          </div>
        </div>
      </div>

      {/* Mute button */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-32 right-8 bg-transparent border-2 border-white hover:bg-white/20 text-white rounded-full p-3 transition"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
    </div>
  );
};

export default HeroSection;
