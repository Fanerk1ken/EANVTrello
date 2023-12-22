import {ButtonHTMLAttributes} from "react";
import {MouseEvent} from "react";
import {forwardRef} from "react";
import style from './Button.module.scss'

type ButtonProps = {
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(( props, ref) => {
    const onClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (props.onClick) {
            props.onClick(event)
        }
    }

    return (
        <button ref={ref} className={props.className ? props.className : style.addCardButton} type={props.type} onClick={onClick}>{props.children}</button>
    );
})

export default Button;