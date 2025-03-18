import { Game } from "entities/games/api/gamesApi";

export const getPlayers = (game: Game): string => {
  if(game.minPlayers === game.maxPlayers) {
    return `${game.minPlayers}`
  }
  return `${game.minPlayers} - ${game.maxPlayers}`
}