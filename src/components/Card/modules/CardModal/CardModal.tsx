import {FC} from "react";
import style from './CardModal.module.scss'
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineDeveloperBoard } from "react-icons/md";


type CardModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
}

const CardModal:FC<CardModalProps> = ({isOpen, onClose, title}) => {
    if (!isOpen) {
        return null
    }


    return (
        <div className={style.cardModalOverlay} onClick={onClose}>
            <div className={style.cardModalContent} onClick={(e) => e.stopPropagation()}>
                <IoCloseOutline className={style.closeButton}/>
                <div className={style.cardDetailModal}>
                    <div className={style.modalHeader}>
                        <span className={style.modalHeaderIcon}>
                            <MdOutlineDeveloperBoard className={style.iconLg}/>
                        </span>
                        <div className={style.modalTitle}>
                            <h2>{title}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardModal;