import axios from 'axios'

import {API_URL} from '../constant'

export const getUserList =()=>{
  return axios.get(API_URL);
}