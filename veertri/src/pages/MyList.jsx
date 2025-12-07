import { useState } from "react";
import { Trash2, Play, Clock, Star, Calendar, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { educationalVideos, courses } from "../data/mockData";

const MyList = () => {
  // In a real app, this would come from user's saved data
  const [myList, setMyList] = useState([
    ...educationalVideos.slice(0, 3),
    ...courses.slice(0, 2),
  ]);

  const [mySubscriptions] = useState(courses.slice(0, 3));

  const removeFromList = (id) => {
    setMyList(myList.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-4 md:px-16 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Library</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your curated collection of educational content and subscriptions.
          </p>
        </div>

        {/* My List Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-200">
            My List
          </h2>
          {myList.length === 0 ? (
            <div className="text-center py-10 bg-white rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-600 text-xl mb-4">Your list is empty</p>
              <Link
                to="/subjects"
                className="text-[#090D0E] underline hover:text-[#FAD502] transition"
              >
                Browse content to add to your list
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {myList.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full relative group"
                >
                  {/* Remove Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      removeFromList(item.id);
                    }}
                    className="absolute top-4 left-4 z-10 bg-white/90 p-2 rounded-full text-red-500 hover:bg-red-50 transition-colors shadow-sm"
                    title="Remove from list"
                  >
                    <Trash2 size={18} />
                  </button>

                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-[#090D0E] backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-[#FAD502] shadow-sm">
                      {item.genre}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {item.title}
                      </h2>
                      <p className="text-sm text-gray-500 font-medium">
                        Instructor: {item.instructor || "Veertri Expert"}
                      </p>
                    </div>

                    <p className="text-gray-600 mb-6 line-clamp-3 flex-1">
                      {item.description}
                    </p>

                    <div className="space-y-3 border-t border-gray-100 pt-4">
                      <div className="flex items-center text-gray-700">
                        <Star size={18} className="text-yellow-500 mr-2" />
                        <span className="font-semibold">
                          {item.rating} Rating
                        </span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Clock size={18} className="text-blue-600 mr-2" />
                        <span>
                          {item.duration || `${item.modules} Modules`}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Calendar size={18} className="text-purple-600 mr-2" />
                        <span>{item.year}</span>
                      </div>
                    </div>

                    <Link
                      to={`/watch/${item.id}`}
                      className="w-full mt-6 bg-[#FAD502] text-[#090D0E] py-2 rounded-lg font-medium hover:bg-[#FAD502]/80 transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <Play size={18} />
                      Watch Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* My Subscriptions Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-200">
            My Subscriptions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mySubscriptions.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full relative group"
              >
                <div
                  className="absolute top-4 left-4 z-10 bg-green-100 p-2 rounded-full text-green-600 shadow-sm"
                  title="Subscribed"
                >
                  <CheckCircle size={18} />
                </div>

                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-[#090D0E] backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-[#FAD502] shadow-sm">
                    {item.genre}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-500 font-medium">
                      Instructor: {item.instructor || "Veertri Expert"}
                    </p>
                  </div>

                  <p className="text-gray-600 mb-6 line-clamp-3 flex-1">
                    {item.description}
                  </p>

                  <div className="space-y-3 border-t border-gray-100 pt-4">
                    <div className="flex items-center text-gray-700">
                      <Star size={18} className="text-yellow-500 mr-2" />
                      <span className="font-semibold">
                        {item.rating} Rating
                      </span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock size={18} className="text-blue-600 mr-2" />
                      <span>{item.duration || `${item.modules} Modules`}</span>
                    </div>
                  </div>

                  <button className="w-full mt-6 border-2 border-[#090D0E] text-[#090D0E] py-2 rounded-lg font-medium hover:bg-[#090D0E] hover:text-[#FAD502] transition-colors duration-200 flex items-center justify-center gap-2">
                    View Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyList;
