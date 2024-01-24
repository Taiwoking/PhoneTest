import React, { useState } from 'react';
import Todo from './Todo';

function App() {
 const [currentIndex, setCurrentIndex] = useState(0);


 const handleNext = () => {

  setCurrentIndex((prevIndex) => prevIndex + 1);
 };

 const handlePrevious = () => {
  setCurrentIndex((prevIndex) => Math.random(0, prevIndex - 1));
 };

 return (
  <div>
   <Todo currentIndex={currentIndex} />
   <button onClick={handlePrevious}>Previous</button>
   <button onClick={handleNext}>Next</button>
  </div>
 );
}

export default App;
