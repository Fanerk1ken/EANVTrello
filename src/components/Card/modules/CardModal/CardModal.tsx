import {FC} from "react";
import style from './CardModal.module.scss'
type CardModalProps = {
    isOpen: boolean;
    onClose: () => void
}

const CardModal:FC<CardModalProps> = ({isOpen, onClose}) => {
    if (!isOpen) {
        return null
    }


    return (
        <div className={style.cardModalOverlay} onClick={onClose}>
            <div className={style.cardModalContent} onClick={(e) => e.stopPropagation()}>
                {/* Ваш контент модального окна здесь */}
                Модальное окно
            </div>
        </div>
    );
};

export default CardModal;