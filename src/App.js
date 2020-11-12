import React, { useState,useEffect} from 'react';

import './App.css';

const App = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
   alert("I am clicked")
  });


  return (
    <button onClick={() => {
      setNum(num + 1);
    }
   
    
    }>
     
     
      Click ME {num}
    </button>
  );



};

export default App;
