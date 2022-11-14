import axios from 'axios';

async function getAlbums() {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/albums`);

  return data;
}

export default getAlbums;

export const getCharacters = async catchName => {
  const { data } = await axios.get(`https://swapi.py4e.com/api/people/?search=${catchName}`);

  return data;
};

export const sendData = async data => {
  const response = await axios.post(
    'https://62becfba0bc9b125615fd0f7.mockapi.io/api/products',
    data
  );
  return response.data;
};

export const getData = async () => {
  const response = await axios.get('https://62becfba0bc9b125615fd0f7.mockapi.io/api/products');
  console.log(response.data);
  return response.data;
};

export const getProducts = async () => {
  const { data } = await axios.get('https://auth-backend-lesson.herokuapp.com/api/products');

  return data;
};

// export const getCharactersRickAndMorty = async () => {
//   const { data } = await axios.get(
//     'https://rickandmortyapi.com/api/character'
//   );
//   console.log(data)
//   return data.results;
// }

export const getCharactersRickAndMorty = async page => {
  const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
  console.log(data);
  return data;
};
