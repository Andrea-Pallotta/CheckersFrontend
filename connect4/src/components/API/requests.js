import axios from 'axios';
import endpoints from './endpoints';
import Response from '../Classes/Response';

const URL =
  process.env.NODE_ENV === 'production' ? endpoints.EC2 : endpoints.LOCALHOST;

/**
 * Create HTTP Header with Bearer Auth.
 *
 * @param {*} token
 * @return {*}
 */
const createHeader = (token, params = undefined) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${JSON.stringify(token)}`,
    },
    params,
  };
};

/**
 * Create a get request with axios.
 *
 * @param {string} endpoint
 * @param {JSON} params
 * @param {JSON} token
 * @return {*}
 */
const get = async (endpoint, params, token) => {
  const response = await axios.get(
    `${URL}/api${endpoint}`,
    createHeader(token, params)
  );
  return Response.fromJSON(response.data);
};

/**
 * Create a post request with axios.
 *
 * @param {string} endpoint
 * @param {JSON} params
 * @param {JSON} token
 * @return {*}
 */
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
