import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';

const Modal = ({ setShowModal, setSelectedImage, setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const fetchCategories = async () => {
    const res = await axios.get('/categories');
    setCategories(res.data.categories);
    setSelected(res.data.categories[0]); 
  };

  const fetchImages = async (category, page = 1) => {
    const res = await axios.get(`/category/${category}?page=${page}`);
    setImages(res.data.images);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selected) {
      fetchImages(selected, page);
    }
  }, [selected, page]);

  const extractCategory = (path) => {
    const parts = path.split('/');
    return parts.length >= 2 ? parts[parts.length - 2] : '';
  };

  const handleImageClick = (img) => {
    const fileName = img.split('/').pop(); 
    const category = extractCategory(img);
    setSelectedImage(fileName);
    setSelectedCategory(category);
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-4xl overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl font-semibold mb-4">Select a Category</h2>

        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelected(cat);
                setPage(1);
              }}
              className={`px-4 py-1 border rounded ${selected === cat ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-5 gap-4">
          {images.map((img) => (
            <img
              key={img}
              src={`${import.meta.env.VITE_FILE_URL}${img}`}
              alt={img}
              className="w-full h-24 object-contain cursor-pointer hover:scale-105 transition"
              onClick={() => handleImageClick(img)}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            className="px-3 py-1 border rounded"
          >
            Prev
          </button>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="px-3 py-1 border rounded"
          >
            Next
          </button>
        </div>

        <button
          className="mt-6 px-4 py-2 bg-navyblue text-white rounded"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
