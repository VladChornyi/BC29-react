import axios from "axios";

export const getCharacters = async catchName => {
  const { data } = await axios.get(`https://swapi.py4e.com/api/people/?search=${catchName}`)
  console.log(data)
  return data;
}