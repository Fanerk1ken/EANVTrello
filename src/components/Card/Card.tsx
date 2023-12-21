import style from "./Card.module.scss";
import {AiOutlineAlignLeft} from "react-icons/ai";
import {FC} from "react";

type CardProps = {
    title: string
    description: string
}

const Card:FC<CardProps>= (props) => {
    return (
        <div className={style.card}>
            <span>{props.title}</span>
            <span><AiOutlineAlignLeft />{props.description}</span>
        </div>
    );
};

export default Card;