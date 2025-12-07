import { useState } from "react";
import { Trash2, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { movies, tvShows } from "../data/mockData";

const MyList = () => {
  // In a real app, this would come from user's saved data
  const [myList, setMyList] = useState([
    ...movies.slice(0, 3),
    ...tvShows.slice(0, 2),
  ]);

  const removeFromList = (id) => {
    setMyList(myList.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-black min-h-screen pt-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto py-8">
        {/* Header */}
        <h1 className="text-white text-4xl font-bold mb-8">My List</h1>

        {/* List Content */}
        {myList.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl mb-4">Your list is empty</p>
            <Link
              to="/browse"
              className="text-white underline hover:text-gray-300 transition"
            >
              Browse content to add to your list
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {myList.map((item) => (
              <div key={item.id} className="relative group">
                {/* Thumbnail */}
                <Link to={`/watch/${item.id}`} className="block">
                  <div className="relative rounded-md overflow-hidden mb-2">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
                    />

                    {/* Play overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white rounded-full p-3">
                        <Play
                          size={24}
                          fill="currentColor"
                          className="text-black"
                        />
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Info */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="text-green-500 font-semibold">
                        {item.rating}
                      </span>
                      <span>{item.year}</span>
                    </div>
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={() => removeFromList(item.id)}
                    className="text-gray-400 hover:text-red-500 transition"
                    title="Remove from list"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyList;
