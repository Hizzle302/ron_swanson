
import './App.css';

import axios from "axios";
import { useState } from 'react';
import Header from './Components/header';


function App() {

  const [quote, setQuote] = useState (" ");
  const getQuote = () => {
  axios.get("http://ron-swanson-quotes.herokuapp.com/v2/quotes").then(
  (response) => {
  console.log(response)
  setQuote (response.data)
  }
  );
  };
  return (
    <div className="App">
      <Header/>
      
      
        
      
      <button onClick={getQuote}>Get a Quote </button>
      {quote}
    </div>
  );
}

export default App;
