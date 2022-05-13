import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const stockHeaders = {
    'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
    'X-RapidAPI-Key': '74ef464aa3mshe4d6f3055d7cbb0p1ffc59jsn5cbf8535e743',
}

const baseUrl = 'https://yh-finance.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: stockHeaders })

export const stockApi = createApi({
    reducerPath: 'stockApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getStocks: builder.query({
            query: () => createRequest("/market/v2/get-summary")
        })
    })
});

 export const {
     useGetStocksQuery,
 } = stockApi;

