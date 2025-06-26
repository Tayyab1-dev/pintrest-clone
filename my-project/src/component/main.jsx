import { useEffect, useState } from 'react';

function Main({ search }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const API_KEY = 'umOJ8nLav0lQtlNTCPZQABT8ZvxrjM1Q1anvhgaEAl46XqBBgwvyZsCG';

  const fetchImages = async (reset = false) => {
    try {
      setLoading(true);
      const url = search.trim()
        ? `https://api.pexels.com/v1/search?query=${search}&per_page=30&page=${page}`
        : `https://api.pexels.com/v1/curated?per_page=30&page=${page}`;

      const response = await fetch(url, {
        headers: {
          Authorization: API_KEY,
        },
      });

      const data = await response.json();
      const formatted = data.photos.map((photo) => ({
        id: photo.id,
        title: photo.alt || 'Untitled',
        src: photo.src.large,
      }));

      if (reset) {
        setImages(formatted); // Replace on new search
      } else {
        setImages((prev) => [...prev, ...formatted]); // Append on load more
      }

      setLoading(false);
    } catch (err) {
      console.error('Error fetching images:', err);
      setLoading(false);
    }
  };

  // Load new images when search or page changes
  useEffect(() => {
    fetchImages(page === 1); // reset=true only when page is 1 (initial or search)
  }, [search, page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1); // go to next page
  };

  return (
    <div className="min-h-screen">
      <div className="columns-4 gap-4">
        {images.map((img) => (
          <div
            key={img.id}
            className="mb-4 break-inside-avoid rounded-xl shadow overflow-hidden group relative"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full object-cover transition-opacity duration-200 group-hover:opacity-80"
            />
            <button className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-red-500 text-white text-sm px-3 py-1 rounded-full transition-all duration-200">
              Save
            </button>
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-xs p-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
              {img.title}
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center my-8">
        <button
          onClick={handleLoadMore}
          disabled={loading}
          className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
        >
          {loading ? 'Loading...' : 'Load More'}
        </button>
      </div>
    </div>
  );
}

export default Main;
