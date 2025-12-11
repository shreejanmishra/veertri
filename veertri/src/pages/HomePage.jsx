import HeroSection from "../components/HeroSection";
import {
  getFeaturedContent,
  educationalVideos,
  courses,
} from "../data/education";
import { useEffect, useState, Suspense, lazy } from "react";
import bgImage from "../assets/bgImage2.jpg";

const CategoryRow = lazy(() => import("../components/CategoryRow"));

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
      items: [...educationalVideos.slice(0, 8), ...courses.slice(0, 5)],
      link: "/home/trending",
    },
    {
      id: 2,
      name: "New Educational Videos",
      items: educationalVideos.slice(0, 12),
      link: "/home/new-educational",
    },
    {
      id: 3,
      name: "Popular Courses",
      items: courses.slice(0, 12),
      link: "/home/popular-courses",
    },
    {
      id: 4,
      name: "Top Rated",
      items: [
        ...educationalVideos.filter((m) => parseFloat(m.rating) >= 4.8),
        ...courses.filter((t) => parseFloat(t.rating) >= 4.8),
      ],
      link: "/home/top-rated",
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
          <Suspense
            fallback={
              <div className="flex justify-center py-10">
                <div className="w-10 h-10 border-4 border-[#FAD502] border-t-transparent rounded-full animate-spin"></div>
              </div>
            }
          >
            {homeCategories.map((category) => (
              <CategoryRow
                key={category.id}
                title={category.name}
                items={category.items}
                isLarge={category.id === 1}
                linkTo={category.link}
              />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
