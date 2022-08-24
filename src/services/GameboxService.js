import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL, API_KEY} from '../constants/api'
import {getYear} from '../helpers/getCurrentYear/getCurrentYear';

export const gameBoxAPI = createApi({
  reducerPath: 'gameBoxAPI',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  endpoints: (build) => ({
    getGameById: build.query({
      query: id => `/games/${id}?key=${API_KEY}`
    }),
    getGameScreensById: build.query({
      query: id => `/games/${id}/screenshots?key=${API_KEY}`
    }),
    getGamesBySearch: build.query({
      query: ({name, page}) =>
        `/games?page_size=20&search=${name}&page=${page}&key=${API_KEY}`
    }),
    getGames: build.query({
    query: ({filters, page}) =>
      // `/games?page=${page}&ordering=${filters.sortByRating}&ordering=${filters.sortByRelease}&platforms=${filters.platforms.value}&key=${API_KEY}`
      `/games?page=${page}&ordering=${filters.sortByRelease}&dates=1970-01-01,${getYear()}-12-31&ordering=${filters.sortByRating}&platforms=${filters.platforms.value}&key=${API_KEY}`
    }),
  }),
});

export const {
  useGetGamesBySearchQuery,
  useGetGameByIdQuery,
  useGetGameScreensByIdQuery,
  useGetGamesQuery,
  useGetReviewsByIdQuery
} = gameBoxAPI;

export const {
  getGameById,
  getGameScreensById,
  getGameByName,
  getGames,
} = gameBoxAPI.endpoints;