import React from 'react';

import useGif from '../useGif';

const Tag = () => {
  const {gif, fetchData} = useGif();
  
  return (
    <div className="container"> 
      <h1>Random Gif</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <button onClick={fetchData}>Click for New</button>
    </div>
  )
}

export default Tag;