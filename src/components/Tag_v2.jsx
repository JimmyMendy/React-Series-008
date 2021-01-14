import React,{ useState } from 'react';

import useGif from '../useGif';

const Tag = () => {
  const [tag, setTag] = useState('dogs');
  const {gif, fetchData} = useGif(tag);
  
  return (
    <div className="container"> 
      <h1>Random {tag} Gif</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)}/>
      <button onClick={() => fetchData(tag)}>Click for New</button>
    </div>
  )
}

export default Tag;