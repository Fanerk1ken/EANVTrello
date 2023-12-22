import {ButtonHTMLAttributes} from "react";
import {FC} from "react";
import style from "../../screens/HomeScreen/HomeScreen.module.scss";
import {BsPlusLg} from "react-icons/bs";
import {MouseEvent} from "react";


type ButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = (props) => {

    const onClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (props.onClick) {
            props.onClick(event)
        }
    }


    return (
        <button type={props.type} onClick={onClick} className={style.addColumnButton}><BsPlusLg
            className={style.plusSVG}/>{props.children}</button>
    );
};

export default Button;