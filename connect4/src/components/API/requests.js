import axios from 'axios';
import endpoints from './endpoints';
import Response from '../Classes/Response';

const URL =
  process.env.NODE_ENV === 'production' ? endpoints.EC2 : endpoints.LOCALHOST;

const get = async (endpoint, params) => {
  const response = await axios.get(`${URL}/api${endpoint}`, params);
  return Response.fromJSON(response.data);
};

const post = async (endpoint, params) => {
  const response = await axios.post(`${URL}/api${endpoint}`, params);
  console.log(response);
  return Response.fromJSON(response.data);
};

const req = {
  get,
  post,
};

export default req;
