import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`; 

const useGif = (tag) => {
  const [gif, setGif] = useState('');

  const fetchData = async (tag) => {
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);

    const imageSrc = data.data.images.downsized_large.url;

    setGif(imageSrc);
  }

  // Component did Mount ... first render
  useEffect(() => {
    fetchData(tag);
  }, [tag])

  return {gif, fetchData }
}

export default useGif;