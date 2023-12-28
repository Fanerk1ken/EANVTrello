import style from "./Card.module.scss";
import {AiOutlineAlignLeft} from "react-icons/ai";
import {FC} from "react";
import {useState} from "react";
import {CardModal} from "./modules/CardModal";


type CardProps = {
    id: number
    title: string
    description: string
}

const Card:FC<CardProps>= (props) => {

    const {id, title} = props



    const [modalOpen, setModalOpen] = useState(false)
    const openModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    return (
        <>
            <div onClick={openModal} className={style.card}>
                <span className={style.cardTitle}>{title}</span>
                <span className={style.taskId}><AiOutlineAlignLeft />FTL-{id}</span>
            </div>
            {modalOpen ? <CardModal isOpen={modalOpen} onClose={closeModal}/> : undefined}
        </>
    );
};

export default Card;