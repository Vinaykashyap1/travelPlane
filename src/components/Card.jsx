import React, { useState } from 'react'

export default function Card({ id, image, info, price, name, removeTour }) {
  const [readmore, setReadmore] = useState(false);
  const description = `${info.substring(0, 200)}...`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card border rounded-xl shadow-lg p-4 w-80 m-auto">
      <img src={image} alt={name} className="w-full h-70 object-cover rounded-lg" />
      
      <div className="tour-details mt-2">
        <h4 className="tour-price text-green-600 font-bold">{price}</h4>
        <h4 className="tour-name font-semibold">{name}</h4>
      </div>

      <div className="description text-sm text-gray-600 mt-2">
        {readmore ? info : description}
        <span className="text-blue-500 cursor-pointer ml-2" onClick={readmoreHandler}>
          {readmore ? 'show less' : 'read more'}
        </span>
      </div>

      <div className="mt-4">
        <button
          className="btn-remove w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </div>
  )
}
