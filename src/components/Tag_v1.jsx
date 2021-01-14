import React, { useState, useEffect } from 'react';
import axios from 'axios'
const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
  const [tag, setTag] = useState('dogs');
  const [gif, setGif] = useState('');

  const fetchData = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`

    const { data } = await axios.get(url);

    const imageSrc = data.data.images.downsized_large.url;

    setGif(imageSrc);
  }

  // Component did Mount ... first render
  useEffect(() => {
    fetchData(tag);
  }, [tag])

  const handleClick = () => {
    fetchData(tag);
  }

  return (
    <div className="container"> 
      <h1>Random {tag} Gif</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)}/>
      <button onClick={handleClick}>Click for New</button>
    </div>
  )
}

export default Random;