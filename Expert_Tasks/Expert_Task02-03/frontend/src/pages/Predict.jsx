import React, { useState } from 'react';
import axios from '../api/axios';
import Modal from './subComponents/Modal';
import placeholderImg from '../assets/upload.png';

const Predict = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [weather, setWeather] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handlePredict = async () => {
    if (!selectedImage || !selectedCategory || !weather) {
      console.error('Missing data for prediction');
      return;
    }

    try {
      const res = await axios.post('/predict', {
        image: selectedImage,
        category: selectedCategory,
        weather,
      });
      setPrediction(res.data);
      console.log('Prediction result:', res.data);
    } catch (err) {
      console.error('Prediction failed:', err);
    }
  };

  return (
    <div id="predict" className="flex flex-col items-center py-32 bg-lightgrey min-h-[80vh]">
      <div className="max-w-4xl w-full px-4">
        <h1 className="text-4xl font-bold text-navyblue text-center mb-8">
          Predict What You'll Wear Today
        </h1>

        <p className="text-lg text-navyblue text-center mb-12">
          At FitCheck, we combine smart weather analysis with intelligent fashion matching<br />
          to predict whether your outfit fits the day—and your style.
        </p>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h3 className="text-xl font-semibold text-navyblue mb-6">Choose Image, Weather & Predict</h3>

          {/* Image Selection Box */}
          <div className="border-4 border-dashed border-gray-300 rounded-lg w-full h-64 flex flex-col items-center justify-center mb-8">
            {selectedImage ? (
              <>
                <img
                  src={`${import.meta.env.VITE_FILE_URL}/static/images/${selectedCategory}/${selectedImage}`}
                  alt={selectedImage}
                  className="w-32 h-32 object-contain mb-2"
                />
                <p className="text-navyblue">{selectedCategory}</p>
              </>
            ) : (
              <div className="text-center text-gray-600">
                <img src={placeholderImg} className='w-10 h-10 ml-[110px] mb-4' alt="No Image Selected" />
                <p className="text-sm text-gray-500">Click below to choose a clothing image</p>
              </div>
            )}
            <button
              onClick={() => setShowModal(true)}
              className="mt-4 px-6 py-2 bg-navyblue text-white rounded hover:bg-lightpink hover:text-navyblue"
            >
              Select Clothing Item
            </button>
          </div>

          {/* Weather Dropdown + Button Side-by-Side */}
          {!prediction && (
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <select
                className="p-3 border border-navyblue rounded w-full md:w-1/2"
                value={weather}
                onChange={handleWeatherChange}
              >
                <option value="">Select Weather</option>
                <option value="summer">Summer</option>
                <option value="winter">Winter</option>
                <option value="rainy">Rain</option>
              </select>

              <button
                disabled={!selectedImage || !weather}
                onClick={handlePredict}
                className={`w-full md:w-1/2 py-3 text-white rounded font-semibold transition ${!selectedImage || !weather
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-navyblue hover:bg-lightpink'
                  }`}
              >
                Predict Now
              </button>
            </div>
          )}

        </div>
      </div>
      {/* Prediction Result Box */}
      <div className="bg-offwhite rounded-lg border border-[#e0e0e0] p-6 flex justify-between items-center max-w-4xl w-full px-4 shadow-sm transition mt-4">
        {!prediction ? (
          <div>
            <h3 className="text-xl font-semibold text-navyblue mb-2">Predicted Result:</h3>
            <p className="text-sm text-gray-700 mb-1">
              Your predicted result will be displayed here after you make a prediction i.e., what was predicted in accordance with weather.
            </p>
            <p className="text-sm text-gray-700">
              Later, it will suggest whether you should wear it or not. Also, finds you some other essentials suitable for that weather.
            </p>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-semibold text-navyblue mb-2">Predicted Result:</h3>
            <p className="text-sm text-gray-800 mb-1">
              <strong>Predicted Category:</strong> {prediction.predicted_class}
            </p>
            <p className="text-sm text-gray-800 mb-1">
              <strong>Is This Wearable?</strong> {prediction.is_wearable}
            </p>
            <p className="text-sm text-gray-800 mb-1">
              <strong>Weather You Chose:</strong> {prediction.weather}
            </p>
            <p className="text-sm text-gray-800">
              <strong>You Can Consider These Items As Well:</strong><br/> {prediction.suggested_for_weather?.join(', ') || 'None'}
            </p>
          </div>
        )}

        {prediction && (
          <button
            onClick={() => {
              setPrediction(null)
              setSelectedImage(null)
              setSelectedCategory('')
              setWeather('')
            }}
            className="ml-4 bg-lightpink text-navyblue px-4 py-2 rounded shadow hover:bg-lightpink transition"
          >
            Predict Again
          </button>
        )}
      </div>

      {/* Image Modal */}
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          setSelectedImage={setSelectedImage}
          setSelectedCategory={setSelectedCategory}
        />
      )}
    </div>
  );
};

export default Predict;
