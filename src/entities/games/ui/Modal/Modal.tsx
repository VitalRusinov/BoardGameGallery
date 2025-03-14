import { FC } from 'react';
import './modal.scss';

interface ModalProps {
  game: {
    id: number;
    name: string;
    description: string;
    image: string;
    size: string;
  };
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
            <span>{ '- 4' }</span>
          </div>
          <div className="parametr">
            <img src="/svg/watch.svg" alt="watch" />
            <span>{ '- 60мин' }</span>
          </div>
          <div className="parametr">
            <img src="/svg/age.svg" alt="age" />
            <span>{ '- 10' }</span>
          </div>
        </div>
        <h1>{game.name}</h1>
        <p>{game.description}</p>
      </div>
    </div>
  );
};
