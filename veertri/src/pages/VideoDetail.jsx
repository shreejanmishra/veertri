import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Play, Plus, ThumbsUp, ThumbsDown, Share2 } from "lucide-react";
import VideoPlayer from "../components/VideoPlayer";
import { getContentById, educationalVideos, courses } from "../data/mockData";

const VideoDetail = () => {
  const { id } = useParams();
  const [content, setContent] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [similarContent, setSimilarContent] = useState([]);

  useEffect(() => {
    const item = getContentById(id);
    setContent(item);

    // Get similar content (same genre)
    if (item) {
      const all = [...educationalVideos, ...courses];
      const similar = all
        .filter((c) => c.genre === item.genre && c.id !== item.id)
        .slice(0, 6);
      setSimilarContent(similar);
    }
  }, [id]);

  if (!content) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      {/* Video Player or Hero Image */}
      <div className="relative">
        {isPlaying ? (
          <VideoPlayer
            videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
            thumbnail={content.backdrop}
            title={content.title}
          />
        ) : (
          <div className="relative h-screen">
            <img
              src={content.backdrop}
              alt={content.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                {content.title}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="bg-white hover:bg-gray-200 text-black font-semibold px-8 py-3 rounded-md flex items-center gap-2 transition"
                >
                  <Play size={24} fill="currentColor" />
                  <span>Play</span>
                </button>

                <button className="bg-gray-500/70 hover:bg-gray-500/50 text-white rounded-full p-3 transition">
                  <Plus size={24} />
                </button>

                <button className="bg-gray-500/70 hover:bg-gray-500/50 text-white rounded-full p-3 transition">
                  <ThumbsUp size={24} />
                </button>

                <button className="bg-gray-500/70 hover:bg-gray-500/50 text-white rounded-full p-3 transition">
                  <ThumbsDown size={24} />
                </button>

                <button className="bg-gray-500/70 hover:bg-gray-500/50 text-white rounded-full p-3 transition">
                  <Share2 size={24} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content Details */}
      <div className="px-8 md:px-16 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 text-white mb-4">
              <span className="text-green-500 font-semibold text-xl">
                {content.rating}
              </span>
              <span className="text-lg">{content.year}</span>
              <span className="text-lg">
                {content.duration || `${content.modules} Modules`}
              </span>
              <span className="border border-gray-400 px-2 py-1 text-sm">
                HD
              </span>
            </div>

            <p className="text-white text-lg mb-6">{content.description}</p>
          </div>

          {/* Sidebar Info */}
          <div className="text-gray-400">
            <div className="mb-4">
              <span className="text-gray-500">Cast: </span>
              <span className="text-white">{content.cast?.join(", ")}</span>
            </div>

            <div className="mb-4">
              <span className="text-gray-500">
                {content.director ? "Director: " : "Creator: "}
              </span>
              <span className="text-white">
                {content.director || content.creator}
              </span>
            </div>

            <div className="mb-4">
              <span className="text-gray-500">Genre: </span>
              <span className="text-white">{content.genre}</span>
            </div>
          </div>
        </div>

        {/* Similar Content */}
        <div className="mt-12">
          <h2 className="text-white text-2xl font-bold mb-6">More Like This</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {similarContent.map((item) => (
              <Link
                key={item.id}
                to={`/watch/${item.id}`}
                className="group cursor-pointer"
              >
                <div className="relative rounded-md overflow-hidden mb-2">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-white text-sm font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs">{item.year}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
