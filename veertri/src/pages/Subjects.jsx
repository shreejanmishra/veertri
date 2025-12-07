import HeroSection from "../components/HeroSection";
import { getFeaturedContent, categories, getContentBySubjectAndClass } from "../data/mockData";
import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "../components/MovieCard";

const ClassSelector = ({ selectedClass, onSelectClass }) => {
  const rowRef = useRef(null);
  const classes = Array.from({ length: 12 }, (_, i) => i + 1);

  const scroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative px-4 md:px-16 mb-8 group">
      <h2 className="text-white text-xl font-bold mb-4">Select Class</h2>
      
      <button
        onClick={() => scroll("left")}
        className="hidden md:block absolute left-4 top-[60%] -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="hidden md:block absolute right-4 top-[60%] -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight size={24} />
      </button>

      <div
        ref={rowRef}
        className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {classes.map((classNum) => (
          <button
            key={classNum}
            onClick={() => onSelectClass(classNum)}
            className={`flex-shrink-0 w-24 h-24 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
              selectedClass === classNum
                ? "bg-[#FAD502] border-[#FAD502] text-[#090D0E] scale-110"
                : "bg-gray-800 border-gray-700 text-gray-300 hover:border-[#FAD502] hover:text-white"
            }`}
          >
            <div className="text-center">
              <span className="block text-lg font-bold">Class</span>
              <span className="block text-2xl font-bold">{classNum}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

const SubjectContentRow = ({ title, selectedClass }) => {
  const [items, setItems] = useState([]);
  const rowRef = useRef(null);

  useEffect(() => {
    // Filter content based on subject and selected class
    const filteredItems = getContentBySubjectAndClass(title, selectedClass);
    setItems(filteredItems);
  }, [title, selectedClass]);

  const scroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = direction === "left" ? -800 : 800;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (items.length === 0) return null;

  return (
    <div className="px-4 md:px-16 mb-8 relative group">
      <h2 className="text-white text-2xl font-bold mb-4">{title}</h2>

      <button
        onClick={() => scroll("left")}
        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-r-md opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-l-md opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight size={32} />
      </button>

      <div
        ref={rowRef}
        className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item) => (
          <MovieCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const Subjects = () => {
  const [featuredContent, setFeaturedContent] = useState(null);
  const [selectedClass, setSelectedClass] = useState(10); // Default to Class 10

  useEffect(() => {
    setFeaturedContent(getFeaturedContent());
  }, []);

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <HeroSection content={featuredContent} />

      <div className="relative -mt-32 z-10 pb-20">
        {/* Class Selector Carousel */}
        <ClassSelector 
          selectedClass={selectedClass} 
          onSelectClass={setSelectedClass} 
        />

        {/* Subject Rows */}
        <div className="mt-8">
          {categories.map((category) => (
            <SubjectContentRow 
              key={category.id} 
              title={category.name} 
              selectedClass={selectedClass}
            />
          ))}
          
          {/* Empty State Message if no content found for any subject */}
           <div className="px-4 md:px-16 mt-8 text-gray-500 text-center">
             <p>Showing curriculum for Class {selectedClass}</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
