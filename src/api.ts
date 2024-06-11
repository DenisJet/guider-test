import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const serviceApi = createApi({
  reducerPath: 'service',
  keepUnusedDataFor: 30, // время жизни кэша для всех эндпоинтов
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPost: builder.query<string>({
      query: () => '/posts/1',
      keepUnusedDataFor: 5, // время жизни кэша отдельного эндпоинта
    }),
  }),
});

export const { useGetPostQuery } = serviceApi;
