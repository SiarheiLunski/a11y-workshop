import MockAdapter from 'axios-mock-adapter';
import * as status from 'http-status-codes';
import { db } from './db';

export const mockUpClient = client => {
  const mock = new MockAdapter(client);

  mock.onGet(`${client.defaults.baseURL}/news`).reply(() => [
    status.OK,
    db.news
  ]);
};
