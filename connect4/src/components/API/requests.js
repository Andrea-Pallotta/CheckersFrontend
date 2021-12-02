import axios from 'axios';
import endpoints from './endpoints';
import Response from '../Classes/Response';

const URL =
  process.env.NODE_ENV === 'production' ? endpoints.EC2 : endpoints.LOCALHOST;

const createHeader = (token) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${JSON.stringify(token)}`,
    },
  };
};

const get = async (endpoint, params, token) => {
  const response = await axios.get(
    `${URL}/api${endpoint}`,
    { params },
    createHeader(token)
  );
  return Response.fromJSON(response.data);
};

const post = async (endpoint, params, token) => {
  const response = await axios.post(
    `${URL}/api${endpoint}`,
    params,
    createHeader(token)
  );
  return Response.fromJSON(response.data);
};

const req = {
  get,
  post,
};

export default req;
