import {FC} from "react";
import {Card} from "../Card";
import style from "./Column.module.scss";
import {BsPlusLg} from "react-icons/bs";
import {useState} from "react";
import {useRef} from "react";
import {useClickOutside} from "../../utils/hook/useClickOutside.ts";
import { useForm } from "react-hook-form"


type Inputs = {
    value: string
    valueRequired: string
}

type ColumnProps = {
    title: string
    tasks: {
        "id": number
        "title": string
        "description": string
    }[]
}
const Column:FC<ColumnProps> = (props) => {

    const [cards, setCards] = useState(props.tasks)
    const [openAddCard, setOpenAddCard] = useState(false)
    const clickRef = useRef(null);
    const clickButtonRef = useRef(null);
    useClickOutside([clickRef, clickButtonRef], () => {
        setOpenAddCard(false)
    });
    const {
        register,
        handleSubmit,
        reset,
    } = useForm<Inputs>()
    const onSubmit = handleSubmit((data) => {
        setCards((prev) => [...prev, {id: Date.now(), title: data.value, description: ''}])
        reset()
        })
    const onClick = () => {
        setOpenAddCard(true)
        if (openAddCard) {
            onSubmit()
        }
    }

    // const addCard = () => {
    //
    // }
    return (
        <div className={style.column}>
            <span>{props.title}</span>
            {cards.map(task => <Card key={task.id} id={task.id} title={task.title} description={task.description}/>)}
            {openAddCard ?
                <div ref={clickRef} >
                    <form onSubmit={onSubmit}>
                        <textarea autoFocus={true} className={style.inputAddCard} placeholder="Ввести заголовок для этой карточки" id="" cols={30} rows={10} {...register("value", { required: true})}></textarea>
                    </form>
                </div> : undefined}


            <button ref={clickButtonRef} className={style.addCardButton}
                    onClick={onClick}>
                <BsPlusLg />
                Добавить карточку
            </button>
        </div>
    );
};

export default Column;