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
            <span>{props.title}</span>
            <span><AiOutlineAlignLeft />FTL-{props.id}</span>
        </div>
    );
};

export default Card;