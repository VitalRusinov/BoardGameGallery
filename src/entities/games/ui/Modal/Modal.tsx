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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          x
        </button>
        <div className="modal__content">
          <img src={game.image} alt={game.name} className="modal__image" />
          <div className="modal__title">{game.name}</div>
          <div className="modal__description">{game.description}</div>
        </div>
      </div>
    </div>
  );
};
