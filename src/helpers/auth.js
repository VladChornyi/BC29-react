import axios from 'axios'

export async function setDataRegistration(user) {
  const { data } = await axios.post('https://auth-backend-lesson.herokuapp.com/api/users/signup', user)
  return data
}

