import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export const postApi = createApi({
  reducerPath: 'post',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPost: builder.query<Post, string>({
      query: (id: string) => `/posts/${id}`,
    }),
  }),
});

export const { useGetPostQuery } = postApi;
