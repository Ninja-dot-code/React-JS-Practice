import React from "react";

function Card() {
  return (
    <div className="w-80 overflow-hidden rounded-lg bg-white shadow-md">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="Beautiful mountain landscape"
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold text-gray-800">
          Beautiful Mountain
        </h2>

        <p className="text-gray-600">
          A beautiful mountain landscape surrounded by nature and fresh air.
        </p>
      </div>
    </div>
  );
}

export default Card;