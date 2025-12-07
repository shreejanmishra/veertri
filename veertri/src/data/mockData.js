export const educationalVideos = [
  {
    id: 1,
    title: "Introduction to Astrophysics",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=750&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop",
    genre: "Science",
    year: 2023,
    duration: "45m",
    rating: "4.9",
    description: "Explore the mysteries of the universe, from black holes to the big bang, in this comprehensive introduction to astrophysics.",
    instructor: "Dr. Neil Tyson",
    featured: true
  },
  {
    id: 2,
    title: "World History: Ancient Civilizations",
    thumbnail: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?w=500&h=750&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?w=1920&h=1080&fit=crop",
    genre: "History",
    year: 2022,
    duration: "1h 15m",
    rating: "4.8",
    description: "Journey back in time to explore the rise and fall of the world's greatest ancient civilizations, from Egypt to Rome.",
    instructor: "Prof. Mary Beard",
    featured: false
  },
  {
    id: 3,
    title: "Calculus Made Easy",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=750&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&h=1080&fit=crop",
    genre: "Mathematics",
    year: 2023,
    duration: "50m",
    rating: "4.7",
    description: "Master the fundamentals of calculus with intuitive explanations and real-world examples.",
    instructor: "Prof. Steven Strogatz",
    featured: true
  },
  {
    id: 4,
    title: "Python Programming for Beginners",
    thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&h=750&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1920&h=1080&fit=crop",
    genre: "Technology",
    year: 2024,
    duration: "1h 30m",
    rating: "4.9",
    description: "Start your coding journey with Python. Learn variables, loops, functions, and build your first application.",
    instructor: "Guido van Rossum",
    featured: false
  },
  {
    id: 5,
    title: "The Art of Creative Writing",
    thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&h=750&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&h=1080&fit=crop",
    genre: "Arts",
    year: 2021,
    duration: "40m",
    rating: "4.6",
    description: "Unlock your creativity and learn the techniques of storytelling, character development, and world-building.",
    instructor: "Neil Gaiman",
    featured: false
  }
];

export const courses = [
  {
    id: 101,
    title: "Complete Web Development Bootcamp",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=750&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop",
    genre: "Technology",
    year: 2023,
    modules: 12,
    lessons: 150,
    rating: "5.0",
    description: "Become a full-stack web developer with this comprehensive bootcamp covering HTML, CSS, JavaScript, React, and Node.js.",
    instructor: "Dr. Angela Yu",
    featured: true
  },
  {
    id: 102,
    title: "Machine Learning A-Z",
    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&h=750&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1920&h=1080&fit=crop",
    genre: "Technology",
    year: 2022,
    modules: 10,
    lessons: 80,
    rating: "4.8",
    description: "Dive into the world of AI and Machine Learning. Master algorithms, data preprocessing, and model evaluation.",
    instructor: "Andrew Ng",
    featured: false
  },
  {
    id: 103,
    title: "Financial Literacy 101",
    thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&h=750&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1920&h=1080&fit=crop",
    genre: "Finance",
    year: 2023,
    modules: 5,
    lessons: 25,
    rating: "4.9",
    description: "Learn how to manage your money, invest wisely, and plan for a secure financial future.",
    instructor: "Warren Buffett",
    featured: false
  },
  {
    id: 104,
    title: "Digital Photography Masterclass",
    thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=750&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1920&h=1080&fit=crop",
    genre: "Arts",
    year: 2021,
    modules: 8,
    lessons: 40,
    rating: "4.7",
    description: "Take stunning photos with any camera. Learn composition, lighting, editing, and more.",
    instructor: "Annie Leibovitz",
    featured: false
  }
];

export const categories = [
  { id: 1, name: "Popular Courses", items: [...educationalVideos.slice(0, 3), ...courses.slice(0, 2)] },
  { id: 2, name: "Science & Tech", items: [...educationalVideos.filter(m => m.genre === "Science" || m.genre === "Technology"), ...courses.filter(t => t.genre === "Science" || t.genre === "Technology")] },
  { id: 3, name: "History & Arts", items: [...educationalVideos.filter(m => m.genre === "History" || m.genre === "Arts"), ...courses.filter(t => t.genre === "History" || t.genre === "Arts")] },
  { id: 4, name: "Mathematics", items: educationalVideos.filter(m => m.genre === "Mathematics") },
  { id: 5, name: "Top Rated", items: [...educationalVideos.filter(m => parseFloat(m.rating) >= 4.8), ...courses.filter(t => parseFloat(t.rating) >= 4.8)] }
];

export const getFeaturedContent = () => {
  const featured = [...educationalVideos, ...courses].filter(item => item.featured);
  return featured[Math.floor(Math.random() * featured.length)];
};

export const getContentById = (id) => {
  return [...educationalVideos, ...courses].find(item => item.id === parseInt(id));
};
