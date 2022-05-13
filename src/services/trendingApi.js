import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const stockHeaders = {
    'X-RapidAPI-Host': process.env.REACT_APP_STOCKAPI_HOST,
    'X-RapidAPI-Key': process.env.REACT_APP_STOCKAPI_KEY,
}

const baseUrl = 'https://yh-finance.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: stockHeaders })

export const trendingApi = createApi({
    reducerPath: 'trendingApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getTrending: builder.query({
            query: (count) => createRequest(`/market/get-trending-tickers?limit=${count}`),
        })
    })
});

export const {
    useGetTrendingQuery,
} = trendingApi;