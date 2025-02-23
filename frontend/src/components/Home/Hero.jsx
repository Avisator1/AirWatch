import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import FAQ from '../Function/FAQ';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import useCoordinate from '../hooks/useCoordinate';
import { div } from 'framer-motion/client';

// Define a custom icon to ensure proper display
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// This function maps the raw inputData object to a Chart.js data object.
const mapInputDataToChart = (inputData) => {
  // Ensure inputData exists and contains a valid data property
  if (!inputData || !inputData.data) return null;
  const keys = Object.keys(inputData.data);
  if (keys.length === 0) return null;

  // Use the length of the first pollutant's history to create labels.
  // Here we simply label them as T1, T2, …, Tn.
  const labels = inputData.data[keys[0]].history.map((_, index) => `T${index + 1}`);

  // Define a color mapping for each key.
  const colors = {
    co: 'rgba(75, 192, 192, 1)',
    no: 'rgba(54, 162, 235, 1)',
    no2: 'rgba(255, 206, 86, 1)',
    o3: 'rgba(255, 99, 132, 1)',
    pm10: 'rgba(153, 102, 255, 1)',
    pm25: 'rgba(255, 159, 64, 1)',
    relativehumidity: 'rgba(201, 203, 207, 1)',
    so2: 'rgba(100, 100, 100, 1)',
    temperature: 'rgba(0, 0, 0, 1)',
    um003: 'rgba(100, 100, 255, 1)', // Added a color mapping for um003
  };

  // Build the datasets array from the inputData keys.
  const datasets = keys.map((key) => ({
    label: `${key.toUpperCase()} (${inputData.data[key].unit})`,
    data: inputData.data[key].history,
    fill: false,
    borderColor: colors[key] || 'rgba(0, 0, 0, 1)',
    tension: 0.3,
  }));

  return { labels, datasets };
};

function AirQualityChart({ inputData }) {
  const mappedChart = mapInputDataToChart(inputData);

  // Return a fallback if no valid data is available.
  if (!mappedChart) {
    return <p>No data available to display.</p>;
  }

  // Use the mappedChart directly as the Chart.js data.
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Air Quality',
      },
    },
  };

  return (<div>
    <a className='mt-5 text-center items-center flex justify-center mx-auto text-blue-500 underline' href="/gases">Confused? Here's a Rundown</a>
    <Line data={mappedChart} options={options} />
    </div>
  )
}

function LocationClickHandler({ setMarker, setPosition }) {
  useMapEvents({
    click(e) {
      console.log("Clicked at:", e.latlng);
      // Update both the marker and the position
      setMarker(e.latlng);
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}

function OpenStreetMap({ position, setPosition }) {
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        (error) => {
          console.error('Geolocation error:', error);
          setPosition([20.5937, 78.9629]); // Fallback coordinates (e.g., center of India)
        }
      );
    } else {
      setPosition([20.5937, 78.9629]);
    }
  }, [setPosition]);

  if (!position) {
    return <p>Loading map...</p>;
  }

  return (
    <div>

    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationClickHandler setMarker={setMarker} setPosition={setPosition} />
      {marker && (
        <Marker position={marker} icon={customIcon} />
      )}
    </MapContainer>
    </div>
  );
}

function Hero() {
  const [position, setPosition] = useState([20.5937, 78.9629]);
  // Retrieve the chart data using the custom hook
  const chartData = useCoordinate(position[0], position[1]);

  return (
    <div className="flex flex-col items-center justify-center mt-10 lg:mt-20">
      <div className="text-center px-4">
        <h1 className="text-4xl recursive-bold md:text-8xl font-bold lg:max-w-4xl mx-auto mt-20 text-[#00022b] mb-6">
          Predict Air Quality Seamlessly
        </h1>
        <p className="text-[#00022b] mb-10 text-lg lg:text-2xl opacity-80 max-w-2xl mx-auto">
          Our objective is to develop a state-of-the-art forecasting tool that can accurately predict air quality levels in economically challenged countries.
        </p>
        <a 
          href='#map' 
          className="mt-8 px-6 py-3 bg-[#ffb54c] cursor-pointer text-white font-semibold rounded-full hover:bg-opacity-90 transition duration-300 shadow-lg"
        >
          Explore Now
        </a>
      </div>
      <div id='map' className="w-full max-w-4xl mx-auto mt-40 ">

        <OpenStreetMap setPosition={setPosition} position={position} />
        <div className='mt-20'></div>
        <AirQualityChart inputData={chartData} />
      </div>
      <FAQ />
    </div>
  );
}

export default Hero;
