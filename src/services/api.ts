  
import axios from 'axios';

const api = axios.create({ baseURL: "https://sos-tdm-back.herokuapp.com" });

export default api;