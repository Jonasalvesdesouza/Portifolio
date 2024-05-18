import axios from 'axios';
import { ConfigServerUrl } from '../config';

export const api = axios.create({
  baseURL: ConfigServerUrl,
  timeout: 5 * 1000,
});
