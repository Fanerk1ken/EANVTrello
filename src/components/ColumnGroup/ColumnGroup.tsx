import {useState} from "react";
import {useRef} from "react";
import {useClickOutside} from "../../utils/hook/useClickOutside.ts";
import {useForm} from "react-hook-form";
import {Column} from "../Column";
import Button from "../Buttons/Button.tsx";
import {BsPlusLg} from "react-icons/bs";
import style from './ColumnGroup.module.scss'
import {IoCloseOutline} from "react-icons/io5";

type Inputs = {
    value: string
    valueRequired: string
}

type ColumnType = {
    title: string
    tasks: any[]
}
const ColumnGroup = () => {
    const [columns, setColumns] = useState<ColumnType[]>([])
    const [openNewColomn, setOpenNewColomn] = useState(false)
    const clickRef = useRef(null);
    const clickButtonRef = useRef(null);
    useClickOutside([clickRef, clickButtonRef], () => {
        setOpenNewColomn(false)
    });

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<Inputs>()

    const onClick = () => {
        setOpenNewColomn(true)
    }

    const handleClickClose = () => {
        setOpenNewColomn(false)
    }

    const onSubmit = handleSubmit((data) => {
        // я пидорас и исправлю это (нормальные типы для тасок)
        setColumns((prevState) => [...prevState, {title: data.value, tasks: []}])
        reset()
        setOpenNewColomn(false)
    })
    return (
        <div className={style.columns}>
            {columns.map(el => <Column key={Date.now()} title={el.title} tasks={[]}/>)}
            <div>
                {openNewColomn ? <div ref={clickRef}>
                    <form onSubmit={onSubmit} className={style.form}>
                    <textarea autoFocus={true}
                              className={style.inputAddColumn}
                              placeholder="Ввести заголовок для списка" cols={30}
                              rows={10} {...register("value", {required: true})}></textarea>
                        <div className={style.openAddCardWithCloseIcons}>
                            <Button className={style.addNewColumnButton} type={"submit"} onSubmit={onSubmit}>
                                Добавить колонку
                            </Button>
                            <IoCloseOutline onClick={handleClickClose} className={style.closeSvg} color={'white'}/>
                        </div>
                    </form>
                </div> : <Button onClick={onClick} className={style.addColumnButton}><BsPlusLg/>Добавить еще одну
                    колонку</Button>}
            </div>
        </div>
    );
};

export default ColumnGroup;