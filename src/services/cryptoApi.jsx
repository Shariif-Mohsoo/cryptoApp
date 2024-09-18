import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-key": "2f91bb8c77msh611ce301eafe55ep1de775jsn877ff36ffc3e",
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
//endpoint refers to the end of the url means path where to make request to fetch data.
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => {
    return {
      getCryptos: builder.query({
        query: (count) => {
          return createRequest(`/coins?limit=${count}`);
        },
      }),
      getCryptoDetails: builder.query({
        query: (countId) => {
          return createRequest(`/coin/${countId}`);
        },
      }),
    };
  },
});
export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
