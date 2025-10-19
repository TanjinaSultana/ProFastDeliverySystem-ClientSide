import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useLoaderData } from "react-router";

const FlyToLocation = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 10, { duration: 2 });
    }
  }, [position, map]);

  return null;
};

const Coverage = () => {
  const [search, setSearch] = useState("");
  const [selectedPosition, setSelectedPosition] = useState(null);
  const ServiceCenter = useLoaderData();

  const handleSearch = () => {
    const foundCenter = ServiceCenter.find((center) =>
      center.district.toLowerCase().includes(search.toLowerCase())
    );
    if (foundCenter) {
      setSelectedPosition([foundCenter.latitude, foundCenter.longitude]);
    } else {
      alert("District not found!");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-base-100 rounded-3xl mt-4 mb-12">
      <div className="mx-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          We are available in 64 districts
        </h2>

        {/* Search bar */}
        <div className="flex mb-12">
          <div className="flex items-center w-full max-w-md border border-gray-300 rounded-full shadow-sm overflow-hidden">
            <input
              type="text"
              placeholder="🔍  Search district name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 outline-none text-gray-700"
            />
            <button
              onClick={handleSearch}
              className="bg-lime-400 hover:bg-lime-500 text-gray-800 font-semibold px-6 py-2 rounded-r-full"
            >
              Search
            </button>
          </div>
        </div>

        <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
          We deliver almost all over Bangladesh
        </h3>

        {/* Map Section */}
        <MapContainer
          center={[23.685, 90.3563]} // Center of Bangladesh
          zoom={7}
          scrollWheelZoom={false}
          className="h-[400px] w-full rounded-xl shadow-md"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          />

          {/* Fly to searched location */}
          {selectedPosition && <FlyToLocation position={selectedPosition} />}

          {/* Markers */}
          {ServiceCenter &&
            ServiceCenter.map((center) => (
              <Marker
                key={center.city}
                position={[center.latitude, center.longitude]}
                icon={
                  new L.Icon({
                    iconUrl: markerIcon,
                    iconRetinaUrl: markerIcon2x,
                    shadowUrl: markerShadow,
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41],
                  })
                }
              >
                <Popup>
                  <strong>{center.district}</strong>
                  <br />
                  {center.covered_area.join(", ")}
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
