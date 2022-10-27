
import axios from 'axios'

async function getAlbums() {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/albums`
  )

  return data
}

export default getAlbums

export const getCharacters = async (catchName) => {
  const { data } = await axios.get(
    `https://swapi.py4e.com/api/people/?search=${catchName}`
  )
  console.log(data)
  return data
}



