import axios from 'axios';
import { mockUpClient } from '../mockServer/mockServer';

const client = axios.create({
  baseURL: 'http://localhost:4000'
});
mockUpClient(client);

export const getNews = async () => await client.get('news');

export const getProducts = async () => await client.get('products');
