export const movies = [
  {
    id: 1,
    title: "Inception",
    thumbnail: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&h=1080&fit=crop",
    genre: "Sci-Fi",
    year: 2010,
    duration: "2h 28m",
    rating: "8.8",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    director: "Christopher Nolan",
    featured: true
  },
  {
    id: 2,
    title: "The Dark Knight",
    thumbnail: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1920&h=1080&fit=crop",
    genre: "Action",
    year: 2008,
    duration: "2h 32m",
    rating: "9.0",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    director: "Christopher Nolan",
    featured: false
  },
  {
    id: 3,
    title: "Interstellar",
    thumbnail: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&h=750&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1920&h=1080&fit=crop",
    genre: "Sci-Fi",
    year: 2014,
    duration: "2h 49m",
    rating: "8.6",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    director: "Christopher Nolan",
    featured: true
  },
  {
    id: 4,
    title: "Parasite",
    thumbnail: "https://images.unsplash.com/photo-1574267432644-f02b5e2c8dd3?w=500&h=750&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1574267432644-f02b5e2c8dd3?w=1920&h=1080&fit=crop",
    genre: "Thriller",
    year: 2019,
    duration: "2h 12m",
    rating: "8.6",
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    director: "Bong Joon-ho",
    featured: false
  },
  {
    id: 5,
    title: "Dune",
    thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1920&h=1080&fit=crop",
    genre: "Sci-Fi",
    year: 2021,
    duration: "2h 35m",
    rating: "8.1",
    description: "Feature adaptation of Frank Herbert's science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset.",
    cast: ["Timothée Chalamet", "Rebecca Ferguson", "Zendaya"],
    director: "Denis Villeneuve",
    featured: false
  }
];

export const tvShows = [
  {
    id: 101,
    title: "Breaking Bad",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop",
    genre: "Drama",
    year: 2008,
    seasons: 5,
    episodes: 62,
    rating: "9.5",
    description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine.",
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
    creator: "Vince Gilligan",
    featured: true
  },
  {
    id: 102,
    title: "Stranger Things",
    thumbnail: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=500&h=750&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=1920&h=1080&fit=crop",
    genre: "Sci-Fi",
    year: 2016,
    seasons: 4,
    episodes: 34,
    rating: "8.7",
    description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces.",
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder"],
    creator: "The Duffer Brothers",
    featured: false
  },
  {
    id: 103,
    title: "The Crown",
    thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&h=1080&fit=crop",
    genre: "Drama",
    year: 2016,
    seasons: 6,
    episodes: 60,
    rating: "8.6",
    description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    cast: ["Claire Foy", "Olivia Colman", "Imelda Staunton"],
    creator: "Peter Morgan",
    featured: false
  },
  {
    id: 104,
    title: "The Mandalorian",
    thumbnail: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=500&h=750&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=1920&h=1080&fit=crop",
    genre: "Sci-Fi",
    year: 2019,
    seasons: 3,
    episodes: 24,
    rating: "8.7",
    description: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
    cast: ["Pedro Pascal", "Giancarlo Esposito", "Carl Weathers"],
    creator: "Jon Favreau",
    featured: false
  }
];

export const categories = [
  { id: 1, name: "Trending Now", items: [...movies.slice(0, 3), ...tvShows.slice(0, 2)] },
  { id: 2, name: "Sci-Fi", items: [...movies.filter(m => m.genre === "Sci-Fi"), ...tvShows.filter(t => t.genre === "Sci-Fi")] },
  { id: 3, name: "Action", items: movies.filter(m => m.genre === "Action") },
  { id: 4, name: "Drama", items: [...movies.filter(m => m.genre === "Drama"), ...tvShows.filter(t => t.genre === "Drama")] },
  { id: 5, name: "Top Rated", items: [...movies.filter(m => parseFloat(m.rating) >= 8.5), ...tvShows.filter(t => parseFloat(t.rating) >= 8.5)] }
];

export const getFeaturedContent = () => {
  const featured = [...movies, ...tvShows].filter(item => item.featured);
  return featured[Math.floor(Math.random() * featured.length)];
};

export const getContentById = (id) => {
  return [...movies, ...tvShows].find(item => item.id === parseInt(id));
};
