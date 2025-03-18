import { api } from 'shared/api';

export interface Game {
  id: number;
  name: string;
  minPlayers: number;
  maxPlayers: number;
  playTime: string;
  minAge: number;
  difficulty: "Легкий" | "Средний" | "Сложный";
  description: string;
  image: string;
  icon: string;
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