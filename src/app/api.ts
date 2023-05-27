import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { RootState } from './store';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
    prepareHeaders: headers => {
      // prepareHeaders: (headers, { getState }) => {
      // logic to add headers, tokens, etc. to every request
      // const token = (getState() as RootState).auth.token;
      // If we have a token set in state, let's assume that we should be passing it.
      // if (token) {
      //   headers.set('authorization', `Bearer ${token}`);
      // }
      return headers;
    },
  }),
  tagTypes: ['Posts'],
  endpoints: () => ({}),
});
