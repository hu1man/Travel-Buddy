import React, { useEffect, useRef, useState } from 'react';

const MapView = ({ userLocation, destination, onBack }) => {
  const mapRef = useRef(null);
  const directionsRendererRef = useRef(null);
  const [directions, setDirections] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userLocation || !destination) return;

    const loadMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: userLocation,
        zoom: 10,
        streetViewControl: false,
        mapTypeControl: false,
      });

      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer({
        map,
        panel: document.getElementById('directionsPanel'),
      });
      directionsRendererRef.current = directionsRenderer;

      const request = {
        origin: new window.google.maps.LatLng(userLocation.lat, userLocation.lng),
        destination: new window.google.maps.LatLng(destination.lat, destination.lng),
        travelMode: window.google.maps.TravelMode.DRIVING,
      };

      directionsService.route(request, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
          setDirections(result);
          setError(null);
        } else {
          setError('Could not fetch directions. Please try again later.');
        }
      });
    };

    if (!window.google || !window.google.maps) {
      setError('Google Maps API not loaded.');
      return;
    }

    loadMap();
  }, [userLocation, destination]);

  return (
    <div className="flex flex-col md:flex-row h-full max-w-7xl mx-auto p-4">
      <div className="md:w-2/3 h-96 md:h-[600px] rounded-lg shadow-md overflow-hidden">
        <div ref={mapRef} className="w-full h-full" />
      </div>
      <div
        id="directionsPanel"
        className="md:w-1/3 mt-4 md:mt-0 md:ml-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-auto max-h-[600px]"
      >
        {error && <p className="text-red-600">{error}</p>}
        {!error && !directions && <p>Loading directions...</p>}
      </div>
      <button
        onClick={onBack}
        className="fixed top-4 left-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded z-50"
      >
        &larr; Back
      </button>
    </div>
  );
};

export default MapView;
