import './galleryItem.scss';
import { Game } from 'entities/games/api/gamesApi';

type GalleryItemProps = {
  game: Game;
  onClick: () => void;
};

export const GalleryItem = ({ game, onClick }: GalleryItemProps) => {
  const [cols, rows] = game.size.split('x').map(Number);

  return (
    <div 
      className="gallery-item" 
      style={{ gridColumn: `span ${cols}`, gridRow: `span ${rows}` }}
      onClick={onClick}
    >
      <div className="gallery-item__image-container">
        <img src={game.image} alt={game.name} />
      </div>
    </div>
  );
};
