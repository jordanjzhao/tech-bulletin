import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const techNewsHeaders = {
    'X-RapidAPI-Host': 'tech-news4.p.rapidapi.com',
    'X-RapidAPI-Key': '74ef464aa3mshe4d6f3055d7cbb0p1ffc59jsn5cbf8535e743',
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