import { useEffect, useState } from 'react';

function Main({ search }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

  const fetchImages = async (reset = false) => {
    try {
      setLoading(true);
      const url = search.trim()
        ? `https://api.pexels.com/v1/search?query=${search}&per_page=30&page=${page}`
        : `https://api.pexels.com/v1/curated?per_page=30&page=${page}`;

      const response = await fetch(url, {
        headers: { Authorization: API_KEY },
      });

      const data = await response.json();
      const formatted = data.photos.map((photo) => ({
        id: photo.id,
        title: photo.alt || `By ${photo.photographer}`,
        src: photo.src.large,
      }));

      reset
        ? setImages(formatted)
        : setImages((prev) => {
            const existingIds = new Set(prev.map((i) => i.id));
            const newImages = formatted.filter((i) => !existingIds.has(i.id));
            return [...prev, ...newImages];
          });

      setLoading(false);
    } catch (err) {
      console.error('Error fetching images:', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(page === 1);
  }, [search, page]);

  const handleLoadMore = () => setPage((prev) => prev + 1);

  return (
    <div className="min-h-screen">
      {/* Image Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
        {images.map((img) => (
          <div
            key={img.id}
            className="mb-4 break-inside-avoid rounded-xl shadow overflow-hidden group relative cursor-pointer"
            onClick={() => setSelectedImage(img)}
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

      {/* Load More */}
      <div className="text-center my-8">
        <button
          onClick={handleLoadMore}
          disabled={loading}
          className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
        >
          {loading ? 'Loading...' : 'Load More'}
        </button>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center px-4 py-8 overflow-auto transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-6xl w-full flex flex-col md:flex-row overflow-hidden relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 left-4 z-50 bg-white/80 hover:bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow pointer-events-auto"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Left - Image */}
            <div className="md:w-2/3 p-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto object-contain rounded-xl max-h-[80vh] mx-auto shadow-md"
              />
              <div className="text-center mt-3 text-sm text-gray-700">
                {selectedImage.title}
              </div>
            </div>

            {/* Right - Related Images Carousel */}
            <div className="md:w-1/3 p-4 border-l border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Related</h2>
              <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                {images
                  .filter((img) => img.id !== selectedImage.id)
                  .slice(0, 10)
                  .map((img) => (
                    <div
                      key={img.id}
                      className="min-w-[120px] flex-shrink-0 cursor-pointer rounded-lg overflow-hidden hover:opacity-80 transition"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                    </div>
                  ))}
              </div>
            </div>

            {/* Floating Buttons */}
            <div className="absolute bottom-6 right-6 flex gap-3 z-40">
              <a
                href={selectedImage.src}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/80 hover:bg-white text-black rounded-full flex items-center justify-center shadow transition"
                title="View full size"
              >
                🔍
              </a>
              <button
                onClick={() => alert('Expand clicked')}
                className="w-10 h-10 bg-white/80 hover:bg-white text-black rounded-full flex items-center justify-center shadow transition"
                title="Expand"
              >
                ⛶
              </button>
              <button
                onClick={() => alert('Saved!')}
                className="px-4 h-10 bg-red-500 hover:bg-red-600 text-white text-sm rounded-full shadow transition"
                title="Save"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
