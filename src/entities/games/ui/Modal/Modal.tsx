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
        <div className="modal__description_title">{game.name}</div>
        <div className="modal__description_description">{game.description}</div>
      </div>
    </div>
  );
};
