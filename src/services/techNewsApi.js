import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const techNewsHeaders = {
    'X-RapidAPI-Host': process.env.REACT_APP_TECHAPI_HOST,
    'X-RapidAPI-Key': process.env.REACT_APP_TECHAPI_KEY,
}

const baseUrl = 'https://tech-news4.p.rapidapi.com/';

const createRequest = (url) => ({ url, headers: techNewsHeaders })

export const techNewsApi = createApi({
    reducerPath: 'techNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: () => createRequest("/news")
        })
    })
});

export const {
    useGetNewsQuery,
} = techNewsApi;