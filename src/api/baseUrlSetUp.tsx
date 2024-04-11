
import axios from 'axios'

let baseURL = 'https://jsonplaceholder.typicode.com'

const instance = axios.create({
  baseURL,
})

export default instance;