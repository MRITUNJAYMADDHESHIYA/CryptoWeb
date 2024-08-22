// eslint-disable-next-line
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';// eslint-disable-next-line

const cryptoApiHeader = {
    'X-RapidAPI-Key': '9dbd6b0215mshb0731c1035904dep18ef5cjsn397564ceac5a',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeader })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest('/coins?Limit=${count}'),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest('/coin/${coinId}'),
        }),
        // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
        }),

        // Note: To access this endpoint you need premium plan
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        }),
    }),
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetExchangesQuery,
    useGetCryptoHistoryQuery,
  } = cryptoApi;
//1.RefucerPath:-The reducerPath is a unique key that your service will be mounted to in your store.
// If you call createApi more than once in your application, you will need to provide a unique value each time. Defaults to 'api'.

//2.baseQuery:-The base query used by each endpoint if no queryFn option is specified.
// RTK Query exports a utility called fetchBaseQuery as a lightweight wrapper around fetch for common use-cases.

//3.endpoints:-Endpoints are just a set of operations that you want to perform against your server.
// You define them as an object using the builder syntax.