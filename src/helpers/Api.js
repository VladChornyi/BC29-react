import axios from 'axios';

async function getAlbums() {
    
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/albums`
    );
    
    return data;
}

export default getAlbums