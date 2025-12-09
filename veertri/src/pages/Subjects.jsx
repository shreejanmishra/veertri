import HeroSection from "../components/HeroSection";
import {
  categories,
  getContentBySubjectAndClass,
  getFeaturedContent,
  getContentById,
  getSubjectHeaderImage,
} from "../data/mockData";
import { useEffect, useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import MovieCard from "../components/MovieCard";

const ClassSelector = ({ selectedClass, onSelectClass }) => {
  const rowRef = useRef(null);
  // const classes = Array.from({ length: 12 }, (_, i) => i + 1);
  // const classes = Array.from({ length: 10 }, (_, i) => i + 1); // Commented out 11th and 12th class cards
  const classes = [
    "Pre-school",
    ...Array.from({ length: 10 }, (_, i) => i + 1),
  ];

  const scroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative px-4 md:px-16 mb-8 group">
      <button
        onClick={() => scroll("left")}
        className="hidden md:block min-[1400px]:hidden absolute left-4 top-[60%] -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="hidden md:block min-[1400px]:hidden absolute right-4 top-[60%] -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight size={24} />
      </button>

      <div
        ref={rowRef}
        className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth p-4 min-[1400px]:justify-start min-[1400px]:overflow-visible"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {classes.map((classNum) => (
          <button
            key={classNum}
            onClick={() => onSelectClass(classNum)}
            className={`flex-shrink-0 w-24 h-24 rounded-xl flex items-center justify-center border-2 transition-all duration-300 ${
              selectedClass === classNum
                ? "bg-[#FAD502] border-[#FAD502] text-[#090D0E] scale-110 shadow-[0_0_20px_rgba(250,213,2,0.4)]"
                : "dark:bg-gray-800 bg-white dark:border-gray-700 border-gray-100 shadow-lg dark:text-gray-300 text-gray-800 hover:border-[#FAD502] dark:hover:text-white hover:text-black hover:shadow-xl hover:-translate-y-1"
            }`}
          >
            <div className="text-center">
              {classNum === "Pre-school" ? (
                <span className="block text-sm font-bold leading-tight">
                  Pre
                  <br />
                  School
                </span>
              ) : (
                <>
                  <span className="block text-lg font-bold">Class</span>
                  <span className="block text-2xl font-bold">{classNum}</span>
                </>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

const SubjectContentRow = ({ title, selectedClass }) => {
  const [items, setItems] = useState([]);
  const [stats, setStats] = useState({ completed: 0, total: 0, percentage: 0 });
  const [isExpanded, setIsExpanded] = useState(true);
  const rowRef = useRef(null);

  const calculateStats = (currentItems) => {
    if (!currentItems || currentItems.length === 0)
      return { completed: 0, total: 0, percentage: 0 };
    const completedVideos = JSON.parse(
      localStorage.getItem("completedVideos") || "[]"
    );
    const completedCount = currentItems.filter((item) =>
      completedVideos.includes(item.id)
    ).length;
    return {
      completed: completedCount,
      total: currentItems.length,
      percentage: Math.round((completedCount / currentItems.length) * 100),
    };
  };

  useEffect(() => {
    // Filter content based on subject and selected class
    const filteredItems = getContentBySubjectAndClass(title, selectedClass);
    setItems(filteredItems);
    setStats(calculateStats(filteredItems));
  }, [title, selectedClass]);

  const handleProgressUpdate = () => {
    setStats(calculateStats(items));
  };

  const scroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = direction === "left" ? -800 : 800;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (items.length === 0) return null;

  return (
    <div className="px-4 md:px-16 mb-12">
      <div className="dark:bg-gray-900/40 bg-white/60 backdrop-blur-sm border dark:border-gray-800 border-gray-200 rounded-2xl p-4 md:p-6 shadow-xl relative group transition-all duration-300 hover:shadow-2xl hover:border-gray-300 dark:hover:border-gray-700">
        {/* Header */}
        <div
          className="mb-4 px-1 flex items-center justify-between cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h2 className="dark:text-white text-gray-900 text-xl md:text-2xl font-bold tracking-wide uppercase flex items-center gap-3 transition-colors duration-300">
            <span className="w-1.5 h-6 md:h-8 bg-[#FAD502] rounded-full block shadow-[0_0_10px_#FAD502]"></span>
            {title}
          </h2>

          <div className="flex items-center gap-4">
            {/* Progress Donut */}
            <div className="relative w-12 h-12">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="24"
                  cy="24"
                  r="18"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                  className="text-gray-200 dark:text-gray-700"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="18"
                  stroke="#FAD502"
                  strokeWidth="4"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 18}
                  strokeDashoffset={
                    2 * Math.PI * 18 * (1 - stats.percentage / 100)
                  }
                  strokeLinecap="round"
                  className="transition-all duration-500 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold dark:text-white text-gray-900">
                {stats.completed}/{stats.total}
              </div>
            </div>

            {/* Chevron */}
            <div
              className={`transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            >
              <ChevronDown
                className="dark:text-white text-gray-900"
                size={24}
              />
            </div>
          </div>
        </div>

        {isExpanded && (
          <>
            {/* Scroll Buttons */}
            <button
              onClick={() => scroll("left")}
              className="hidden md:block absolute left-2 top-[60%] -translate-y-1/2 z-20 bg-black/50 hover:bg-[#FAD502] hover:text-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg backdrop-blur-sm"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="hidden md:block absolute right-2 top-[60%] -translate-y-1/2 z-20 bg-black/50 hover:bg-[#FAD502] hover:text-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg backdrop-blur-sm"
            >
              <ChevronRight size={24} />
            </button>

            {/* Cards Container */}
            <div
              ref={rowRef}
              className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth py-4 px-1"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {items.map((item, index) => (
                <MovieCard
                  key={item.id}
                  item={item}
                  className="w-[calc((100%-16px)/2)] md:w-[calc((100%-48px)/4)]"
                  isFirst={index === 0}
                  isLast={index === items.length - 1}
                  onToggleComplete={handleProgressUpdate}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const Subjects = () => {
  const [selectedClass, setSelectedClass] = useState(() => {
    const saved = localStorage.getItem("selectedClass");
    if (saved === "Pre-school") return "Pre-school";
    if (saved) return parseInt(saved);
    return 10;
  });
  const [heroContent, setHeroContent] = useState(null);

  useEffect(() => {
    localStorage.setItem("selectedClass", selectedClass);
  }, [selectedClass]);

  useEffect(() => {
    const lastViewedId = localStorage.getItem("lastViewedVideoId");
    let content = null;
    // Only use last viewed if it is a subject video (has dash in ID)
    if (lastViewedId && lastViewedId.includes("-")) {
      content = getContentById(lastViewedId);
    }

    if (!content) {
      content = getFeaturedContent();
    }

    setHeroContent(content);
  }, []);

  const getSubjectsForClass = (classNum) => {
    if (classNum === "Pre-school") {
      return [
        { name: "Rhymes" },
        { name: "Stories" },
        { name: "Alphabets" },
        { name: "Numbers" },
        { name: "Drawing" },
      ];
    }
    if (classNum >= 1 && classNum <= 5) {
      return [
        { name: "Maths" },
        { name: "English" },
        { name: "Hindi" },
        { name: "EVS" },
      ];
    } else if (classNum >= 6 && classNum <= 10) {
      return [
        { name: "Maths" },
        { name: "English" },
        { name: "Hindi" },
        { name: "Science" },
        { name: "Computer" },
        { name: "History" },
        { name: "Civics" },
        { name: "Geography" },
      ];
    } else if (classNum >= 11 && classNum <= 12) {
      return [
        {
          title: "Science",
          subjects: ["Maths", "Biology", "Physics", "Chemistry"],
        },
        {
          title: "Commerce",
          subjects: ["Accountancy", "Economics", "Business Studies", "Maths"],
        },
        {
          title: "Arts",
          subjects: [
            "History",
            "Geography",
            "Economics",
            "Political Science",
            "Sociology",
            "Psychology",
            "Philosophy",
          ],
        },
        {
          title: "Additional Subjects",
          subjects: [
            "English",
            "Hindi",
            "Computer Science",
            "Engineering Graphics",
            "Informatics Practices",
            "Fine Arts",
            "Physical Education",
            "Fashion Studies",
            "Multimedia & Web Technology",
            "Entrepreneurship",
            "Home Science",
            "Psychology",
            "Sociology",
          ],
        },
      ];
    }
    return [];
  };

  return (
    <div className="dark:bg-black bg-gray-50 min-h-screen transition-colors duration-300">
      <HeroSection content={heroContent} isCompact={true} />

      <div className="relative mt-8 z-10 pb-20">
        {/* Class Selector Carousel */}
        <ClassSelector
          selectedClass={selectedClass}
          onSelectClass={setSelectedClass}
        />

        {/* Subject Rows */}
        <div className="mt-8">
          {(() => {
            const subjects = getSubjectsForClass(selectedClass);
            // Check if it's the grouped structure (has title and subjects array)
            if (subjects.length > 0 && subjects[0].subjects) {
              return subjects.map((group, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-[#FAD502] text-3xl font-bold px-4 md:px-16 mb-6 border-b dark:border-gray-800 border-gray-200 pb-2 transition-colors duration-300">
                    {group.title}
                  </h2>
                  {group.subjects.map((subject) => (
                    <SubjectContentRow
                      key={subject}
                      title={subject}
                      selectedClass={selectedClass}
                    />
                  ))}
                </div>
              ));
            } else {
              // Flat structure
              return subjects.map((subject) => (
                <SubjectContentRow
                  key={subject.name}
                  title={subject.name}
                  selectedClass={selectedClass}
                />
              ));
            }
          })()}

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
