import { api } from 'shared/api';

export interface Game {
  id: number;
  name: string;
  description: string;
  image: string;
  size: string;
}

export const gamesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getGames: build.query<Game[], void>({
      query: () => 'games.json',
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;