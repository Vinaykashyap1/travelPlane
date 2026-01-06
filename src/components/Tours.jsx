import React from 'react'
import Card from './card'


export default function Tours({ tours, removeTour }) {
  return (
    <div className='container'>
      <div className="grid grid-cols-3 gap-2 m-10 ml-20 justify-center">
        {tours.map((tour) => (
          <Card key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </div>
  )
}
