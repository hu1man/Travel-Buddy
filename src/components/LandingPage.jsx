import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import places from '../utils/places';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faArrowLeft, faArrowRight, faCompass, faRoute } from '@fortawesome/free-solid-svg-icons';

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const LandingPage = ({ onSelectPlace }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = ((page % places.length) + places.length) % places.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // Auto-advance carousel every 5 seconds for slower transitions
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [page]);

  // Preload images for caching to reduce lag
  useEffect(() => {
    places.forEach((place) => {
      const img = new Image();
      img.src = place.image;
    });
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-center flex items-center gap-3 text-blue-600">
        <FontAwesomeIcon icon={faCompass} /> Explore Sri Lanka
      </h1>
      <div className="relative w-full max-w-3xl h-96 select-none">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            className="absolute w-full h-full rounded-lg shadow-lg overflow-hidden cursor-pointer"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            onClick={() => onSelectPlace(places[imageIndex])}
          >
            <img
              src={places[imageIndex].image}
              alt={places[imageIndex].name}
              className="object-cover w-full h-full"
              loading="lazy"
              width={600}
              height={384}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                {places[imageIndex].name}
              </h2>
              <p className="text-sm flex items-center gap-2">
                <FontAwesomeIcon icon={faRoute} />
                {places[imageIndex].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute top-1/2 left-2 -translate-y-1/2 z-10">
          <button
            onClick={() => paginate(-1)}
            className="bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100 transition"
            aria-label="Previous"
          >
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
          </button>
        </div>
        <div className="absolute top-1/2 right-2 -translate-y-1/2 z-10">
          <button
            onClick={() => paginate(1)}
            className="bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100 transition"
            aria-label="Next"
          >
            <FontAwesomeIcon icon={faArrowRight} size="lg" />
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {places.map((place, i) => (
          <button
            key={place.id}
            onClick={() => setPage([i, i > imageIndex ? 1 : -1])}
            className={`w-3 h-3 rounded-full ${
              i === imageIndex ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      <p className="mt-6 text-center text-gray-600 dark:text-gray-300">
        Swipe or use arrows to navigate. Click on the image to select a destination.
      </p>
    </div>
  );
};

export default LandingPage;
