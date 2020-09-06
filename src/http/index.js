import axios from 'axios'


const API_URL = 'https://api-instagram-winner.herokuapp.com/'

export const getUsuarios = async (from=0, limit=10) => {

  try {

    //let data = await axios.get(API_URL + `users?from=${from}&limit=${limit}`);
    let data = await axios.get(API_URL + `users?from=${from}&limit=${limit}`);
    //console.log(data)
    return data

  } catch (error) {
    console.error(error)
  }
  
}


export const getStats = async () => {
  try {
    let data = await axios.get(API_URL + 'users/stats');
    console.log(data)
    return data.data

  } catch (error) {
    console.error(error)
  }
  
}