import { FC } from 'react';
import './modal.scss';
import { Game } from 'entities/games/api/gamesApi';
import { getPlayers } from './mod/getPlayers';

interface ModalProps {
  game: Game;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ game, onClose }) => {
  return (
    <div className="modal">
      <button className="modal__close" onClick={onClose}>
        <img src="/svg/close.svg" alt="close" />
      </button>
      <div className="modal__image_container">
        <img src={game.image} alt={game.name} className="modal__image" />
      </div>
      <div className="modal__description">
        <div className="parameters">
          <div className="parametr">
            <img src="/svg/players.svg" alt="players" />
            <span>{getPlayers(game)}</span>
          </div>
          <div className="parametr">
            <img src="/svg/watch.svg" alt="watch" />
            <span>{`${game.playTime} мин`}</span>
          </div>
          <div className="parametr">
            <img src="/svg/age.svg" alt="age" />
            <span>{`${game.minAge} +`}</span>
          </div>
        </div>
        <h1>{game.name}</h1>
        <p>{game.description}</p>
      </div>
    </div>
  );
};
