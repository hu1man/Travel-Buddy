import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import LocationPopup from './components/LocationPopup';
import MapView from './components/MapView';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [locationPermissionAsked, setLocationPermissionAsked] = useState(false);
  const [locationDenied, setLocationDenied] = useState(false);

  const handleSelectPlace = (place) => {
    setSelectedPlace(place);
    setLocationPermissionAsked(false);
    setLocationDenied(false);
    setUserLocation(null);
  };

  const requestLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      setLocationDenied(true);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLocationPermissionAsked(true);
        setLocationDenied(false);
      },
      () => {
        setLocationDenied(true);
        setLocationPermissionAsked(true);
      }
    );
  };

  const handleAllowLocation = () => {
    requestLocation();
  };

  const handleDenyLocation = () => {
    setLocationDenied(true);
    setLocationPermissionAsked(true);
  };

  const handleBack = () => {
    setSelectedPlace(null);
    setUserLocation(null);
    setLocationPermissionAsked(false);
    setLocationDenied(false);
  };

  return (
    <div
      className="min-h-screen flex flex-col text-gray-900 dark:text-gray-100 transition-colors duration-300"
      style={{
        backgroundImage: "url('/assets/images/bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <Navbar />
      <div className="flex-grow bg-gray-50 dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80">
        {!selectedPlace && <LandingPage onSelectPlace={handleSelectPlace} />}

        {selectedPlace && !locationPermissionAsked && (
          <LocationPopup onAllow={handleAllowLocation} onDeny={handleDenyLocation} />
        )}

        {selectedPlace && locationPermissionAsked && !locationDenied && userLocation && (
          <MapView userLocation={userLocation} destination={selectedPlace} onBack={handleBack} />
        )}

        {selectedPlace && locationPermissionAsked && locationDenied && (
          <div className="p-6 max-w-3xl mx-auto text-center">
            <p className="mb-4 text-red-600">
              Location access denied. Unable to show route.
            </p>
            <button
              onClick={handleBack}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              Back to destinations
            </button>
          </div>
        )}
      </div>
      <footer className="mt-auto">
        <Footer />
      </footer>
      <div className="fixed bottom-4 right-4">
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default App;
