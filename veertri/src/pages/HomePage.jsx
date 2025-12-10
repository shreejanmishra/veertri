import HeroSection from "../components/HeroSection";
import CategoryRow from "../components/CategoryRow";
import {
  getFeaturedContent,
  educationalVideos,
  courses,
} from "../data/mockData";
import { useEffect, useState } from "react";
import bgImage from "../assets/bgImage2.jpg";

const HomePage = () => {
  const [featuredContent, setFeaturedContent] = useState(null);

  useEffect(() => {
    setFeaturedContent(getFeaturedContent());
  }, []);

  // Define Home Page Categories
  const homeCategories = [
    {
      id: 1,
      name: "Trending Now",
      items: [...educationalVideos.slice(0, 3), ...courses.slice(0, 2)],
    },
    {
      id: 2,
      name: "New Educational Videos",
      items: educationalVideos.slice(2, 5),
    },
    {
      id: 3,
      name: "Popular Courses",
      items: courses.slice(0, 3),
    },
    {
      id: 4,
      name: "Top Rated",
      items: [
        ...educationalVideos.filter((m) => parseFloat(m.rating) >= 4.8),
        ...courses.filter((t) => parseFloat(t.rating) >= 4.8),
      ],
    },
  ];

  return (
    <div
      className="min-h-screen transition-colors duration-300 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="min-h-screen dark:bg-black/50 dark:backdrop-blur-sm transition-colors duration-300 pt-24 pb-20">
        {/* Hero Section */}
        <div className="px-4 md:px-16 mb-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-gray-800">
            <HeroSection content={featuredContent} isCompact={true} />
          </div>
        </div>

        {/* Category Rows */}
        <div>
          {homeCategories.map((category) => (
            <CategoryRow
              key={category.id}
              title={category.name}
              items={category.items}
              isLarge={category.id === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
