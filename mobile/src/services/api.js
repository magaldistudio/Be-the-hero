
import axios from 'axios';

const api=axios.create({
  /*3333 rota do incidents  */
  baseURL: 'http://192.168.43.102:3333'

});

export default api;