import { FC, useState } from 'react';
import './gallery.scss';
import { GalleryItem, Modal, useGetGamesQuery } from 'entities/games';
import { Game } from 'entities/games/api/gamesApi';

export const Gallery: FC = () => {
  const { data: games, isLoading, error } = useGetGamesQuery();
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading games</div>;
  }

  const handleItemClick = (game: Game) => {
    setSelectedGame(game);
  };

  const handleCloseModal = () => {
    setSelectedGame(null);
  };

  return (
    <div className="gallery">
      {games && games.map((game) => (
        <GalleryItem game={game} key={game.id} onClick={() => handleItemClick(game)}/>
      ))}
      {selectedGame && <Modal game={selectedGame} onClose={handleCloseModal} />}
    </div>
  );
};
