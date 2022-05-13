import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const stockHeaders = {
    'X-RapidAPI-Host': process.env.REACT_APP_STOCKAPI_HOST,
    'X-RapidAPI-Key': process.env.REACT_APP_STOCKAPI_KEY,
}

const baseUrl = 'https://yh-finance.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: stockHeaders })

export const stockApi = createApi({
    reducerPath: 'stockApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getStocks: builder.query({
            query: () => createRequest("/market/v2/get-summary")
        }),
        getStockDetails: builder.query({
            query: (stockTicker) => createRequest(`/stock/v2/get-summary/?symbol=${stockTicker}`)
        }),
        getChart: builder.query({
            query: (stockTicker) => createRequest(`/stock/v3/get-summary/?interval=1mo/?range=5y/?symbol=${stockTicker}`)
        }),
    })
});

export const {
    useGetStocksQuery,
    useGetStockDetailsQuery,
    useGetChartQuery,
} = stockApi;

