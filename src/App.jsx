import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import searchImg from './assets/search-line.svg';
import { RiCloseLine, RiDownload2Fill } from '@remixicon/react';

const App = () => {
  const apiKey = 'tdueJadA8ZTPIeCOdG83jKTbdnWANKIhtggrzgAdHW8ZmBnwsdCmpcxp';
  const [perPage, setPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("nature");
  const [imagesData, setImagesData] = useState([]);
  const [trackClickedImage, setTrackClickedImage] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [photographerName, setPhotographerName] = useState("");

  const getImages = async (isLoadMore = false) => {
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${searchTerm}&page=${currentPage}&per_page=${perPage}`,
        {
          headers: {
            Authorization: apiKey,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setImagesData(isLoadMore ? [...imagesData, ...data.photos] : data.photos);
    } catch (error) {
      console.error('Failed to fetch images:', error);
    }
  };

  useEffect(() => {
    getImages(currentPage > 1);
  }, [currentPage, searchTerm]);

  const handleImageClick = (src, photographer) => {
    setTrackClickedImage(src);
    setPhotographerName(photographer);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSaveImage = async () => {
    try {
      const response = await fetch(trackClickedImage);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      }
      
      const blob = await response.blob();
      
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.href = url;
      link.download = 'image.jpg';
      link.click();
  
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to save image:', error);
    }
  };
  

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      {/* Header */}
      <header className="h-96 flex flex-col items-center justify-center">
        <h1 className="text-white lg:text-5xl px-2 text-4xl font-bold text-center capitalize">
          Unlock a World of Free Visuals
        </h1>
        <p className="text-white text-center mt-2 px-2 lg:text-lg text-md lg:w-[50%] w-[100%]">
          Browse a vast collection of stunning, royalty-free images to fuel your creativity. Find the perfect shot for any project, all for free.
        </p>
        <div className="search-box mt-6 mb-2 w-full flex items-center justify-center">
          <div className="search lg:w-1/3 w-[90%] bg-blue-500 flex">
            <div className="icon-box lg:w-[10%] w-[15%] py-2 bg-gray-200 flex items-center justify-center">
              <img onClick={getImages} className="h-[20px] w-[20px] cursor-pointer" src={searchImg} alt="" />
            </div>
            <input
              onInput={(e) => setSearchTerm(e.target.value)}
              onKeyUp={(e) => e.key === "Enter" ? setCurrentPage(1) : null}
              className="border-none outline-none px-4 py-2 text-base w-[90%]"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <p className="text-white text-center text-base">Limitless visuals for limitless ideas</p>
      </header>
      {/* Header Ends */}

      {/* Gallery */}
      <div className="container mx-auto p-4">
        <Masonry breakpointCols={breakpointColumnsObj} className="flex -ml-4" columnClassName="pl-4">
          {imagesData.length > 0 ? imagesData.map((image) => (
            <div key={image.id} className="mb-4">
              <img
                onClick={() => handleImageClick(image.src.original, image.photographer)}
                src={image.src.original}
                alt={image.alt}
                className="w-full h-auto object-cover cursor-pointer"
              />
            </div>
          )) : (
            <p className="text-center text-lg text-black">No images found. Please try again.</p>
          )}
        </Masonry>
        {imagesData.length > 0 && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="text-white font-bold block mx-auto mt-3 bg-purple-700 px-3 py-2 rounded"
          >
            Load More
          </button>
        )}
      </div>
      {/* Gallery Ends */}

      {/* Popup */}
      {isPopupOpen && (
  <div
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
    onClick={handleClosePopup}
  >
    <div
      className="bg-white p-4 rounded shadow-lg w-[90%] h-[90%] flex flex-col"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex lg:justify-between lg:items-center lg:flex-row flex-col w-full mb-4">
        <p className="font-semibold text-lg">Photographer: {photographerName}</p>
        <div className="flex gap-2 mt-2 justify-end">
          <button
            onClick={handleSaveImage}
            className="text-white bg-purple-700 py-2 px-3 rounded cursor-pointer"
          >
            <RiDownload2Fill className="text-xl text-white" />
          </button>
          <button
            onClick={handleClosePopup}
            className="text-black bg-gray-200 p-2 rounded cursor-pointer"
          >
            <RiCloseLine className="text-2xl" />
          </button>
        </div>
      </div>

      <div className="h-3/5 flex-grow flex justify-center items-center">
        <img src={trackClickedImage} alt="Selected" className="lg:w-4/5 w-full h-full object-contain" />
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default App;
