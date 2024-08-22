import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';  // eslint-disable-next-line

const cryptoNewsHeader = {
    'x-bingapis-sdk': 'true',
    'X-RapidAPI-Key': 'f814835f37msh5a76e1173fa045ap11458bjsn20eb0b565cf6',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
};

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk';

const createRequest = (url) =>({url, headers: cryptoNewsHeader});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query:({newsCategory, count}) => createRequest(`/news/search?q=${encodeURIComponent(newsCategory)}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
            onError: (error) => {
                console.error('An error occurred:', error);
            },
        }),
    }),
});

export const {useGetCryptoNewsQuery} = cryptoNewsApi;

