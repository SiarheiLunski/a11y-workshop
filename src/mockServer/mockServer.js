import MockAdapter from 'axios-mock-adapter';
import * as status from 'http-status-codes';
import { news, products } from './db';

export const mockUpClient = client => {
  const mock = new MockAdapter(client);

  mock.onGet(`${client.defaults.baseURL}/news`).reply(() => [
    status.OK,
    news
  ]);

  mock.onGet(`${client.defaults.baseURL}/products`).reply(() => [
    status.OK,
    products
  ]);
};
