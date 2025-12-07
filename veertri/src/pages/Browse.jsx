import HeroSection from "../components/HeroSection";
import CategoryRow from "../components/CategoryRow";
import { getFeaturedContent, categories } from "../data/mockData";
import { useEffect, useState } from "react";

const Browse = () => {
  const [featuredContent, setFeaturedContent] = useState(null);

  useEffect(() => {
    setFeaturedContent(getFeaturedContent());
  }, []);

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <HeroSection content={featuredContent} />

      {/* Category Rows */}
      <div className="relative -mt-32 z-10">
        {categories.map((category) => (
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

export default Browse;
