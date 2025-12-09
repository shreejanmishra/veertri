import HeroSection from "../components/HeroSection";
import CategoryRow from "../components/CategoryRow";
import {
  getFeaturedContent,
  educationalVideos,
  courses,
} from "../data/mockData";
import { useEffect, useState } from "react";

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
    <div className="dark:bg-black bg-gray-50 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <HeroSection content={featuredContent} />

      {/* Category Rows */}
      <div className="relative -mt-20 md:-mt-32 z-10 pb-20 space-y-8 md:space-y-12">
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
  );
};

export default HomePage;
