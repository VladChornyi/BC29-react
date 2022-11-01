import axios from "axios";

async function getAlbums() {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/albums`
  );

  return data;
}

export default getAlbums;

export const getCharacters = async (catchName) => {
  const { data } = await axios.get(
    `https://swapi.py4e.com/api/people/?search=${catchName}`
  );

  return data;
};

export const sendData = async (data) => {
  const response = await axios.post(
    "https://62becfba0bc9b125615fd0f7.mockapi.io/api/products",
    data
  );
  return response.data;
};

export const getData = async () => {
  const response = await axios.get(
    "https://62becfba0bc9b125615fd0f7.mockapi.io/api/products"
  );
  console.log(response.data);
  return response.data;
};

export const getBreedCatData = async (breed_ids) => {
  const response = await axios.get("https://api.thecatapi.com/v1/breeds", {
    params: { breed_ids },
  });
  return response.data;
};

export const getCatBreed = async () => {
  const response = await axios.get("https://api.thecatapi.com/v1/breeds");
  return response.data;
};
