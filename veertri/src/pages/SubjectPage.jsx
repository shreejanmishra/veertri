import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { categories } from "../data/mockData";
import MovieCard from "../components/MovieCard";
import { ArrowLeft } from "lucide-react";

const SubjectPage = () => {
  const { subject } = useParams();
  const [subjectData, setSubjectData] = useState(null);

  useEffect(() => {
    // Find the category that matches the subject name
    // The URL param might be "Mathematics", "Science", etc.
    // We need to handle potential URL encoding or slight mismatches if any.
    // For now, assume exact match or simple decoding.
    const decodedSubject = decodeURIComponent(subject);
    const category = categories.find((cat) => cat.name === decodedSubject);

    if (category) {
      setSubjectData(category);
    } else {
      // Fallback if not found in categories array (e.g. if we passed a raw genre)
      // But for now, we will link from the categories list, so it should match.
      setSubjectData({ name: decodedSubject, items: [] });
    }
  }, [subject]);

  if (!subjectData) {
    return (
      <div className="min-h-screen dark:bg-black bg-gray-50 flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen dark:bg-black bg-gray-50 dark:text-white text-gray-900 transition-colors duration-300 pt-24 px-4 md:px-16 pb-12">
      <div className="mb-8">
        <Link
          to="/subjects"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#FAD502] transition-colors mb-4"
        >
          <ArrowLeft size={20} /> Back to Subjects
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
          <span className="w-2 h-8 md:h-10 bg-[#FAD502] rounded-full block shadow-[0_0_10px_#FAD502]"></span>
          {subjectData.name}
        </h1>
      </div>

      {subjectData.items.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl">
            No content found for this subject.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {subjectData.items.map((item) => (
            <div key={item.id} className="w-full">
              <MovieCard item={item} className="w-full" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubjectPage;
