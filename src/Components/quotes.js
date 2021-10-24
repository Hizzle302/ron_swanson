import React, { useState } from "react";
import axios from "axios";


function Quotes (){
  const [quote, setQuote] = useState (" ");
  const getQuote = () => {
  axios.get("http://ron-swanson-quotes.herokuapp.com/v2/quotes").then(
  (response) => {
  console.log(response)
  setQuote (response.data)
  }
  );
  };
  return(
  <div>
  <button onClick={getQuote}>Get a Quote </button>
  {quote}
  </div>
  )
}
export default Quotes;
