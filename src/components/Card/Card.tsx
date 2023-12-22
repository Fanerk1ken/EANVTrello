import style from "./Card.module.scss";
import {AiOutlineAlignLeft} from "react-icons/ai";
import {FC} from "react";

type CardProps = {
    id: number
    title: string
    description: string
}

const Card:FC<CardProps>= (props) => {
    return (
        <div className={style.card}>
            <span className={style.cardTitle}>{props.title}</span>
            <span className={style.taskId}><AiOutlineAlignLeft />FTL-{props.id}</span>
        </div>
    );
};

export default Card;