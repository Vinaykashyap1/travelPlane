import { useState } from 'react'
import './App.css'
import Tours from './components/tours';
import data from './data'


function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return (
      <div className='refresh'>
        <h2>no tours left</h2>

        <button className='btn-white' onClick={ () => setTours(data)} >refresh</button>
      </div>
    )
  }

  return (
    <div className='container'>
     <p className="text-xl text-center mt-10">plan with me</p>
      <Tours className="flex justify-center" tours={tours} removeTour={removeTour} />
    </div>
  )
}

export default App
