import style from './HomeScreen.module.scss'
import {BsPlusLg} from "react-icons/bs";
import tasks from '../../utils/mock/tasks.json'
import {Column} from "../../components/Column";
import Button from "../../components/Buttons/Button.tsx";
import {useState} from "react";
import {useClickOutside} from "../../utils/hook/useClickOutside.ts";
import {useRef} from "react";
import {useForm} from "react-hook-form";


type Inputs = {
    value: string
    valueRequired: string
}

type ColumnType = {
    title: string
    tasks: any[]
}

const HomeScreen = () => {

    const [columns, setColumns] = useState<ColumnType[]>([])
    const [newColumn, setNewColumn] = useState(false)
    const clickRef = useRef(null);
    const clickButtonRef = useRef(null);
    useClickOutside([clickRef, clickButtonRef], () => {
        setNewColumn(false)
    });

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<Inputs>()

    const onClick = () => {
        setNewColumn(true)
    }

    const onSubmit = handleSubmit((data) => {
        // я пидорас и исправлю это (нормальные типы для тасок)
        setColumns((prevState) => [...prevState, {title: data.value, tasks: []}])
        console.log('я кушаю')
        reset()
    })

    return (
        <div className={style.container}>
            <Column title={'Column Title1'} tasks={tasks}/>
            <Column title={'Column Title2'} tasks={tasks}/>
            {columns.map(el => <Column key={Date.now()} title={el.title} tasks={[]}/>)}
            {newColumn ? <div ref={clickRef}>
                <form onSubmit={onSubmit}>
                    <textarea autoFocus={true}
                              placeholder="Ввести заголовок для колонки" cols={30}
                              rows={10} {...register("value", {required: true})}></textarea>
                    <Button type={"submit"} onSubmit={onSubmit}>
                        Добавить колонку
                    </Button>
                </form>

            </div> : undefined}
            <Button onClick={onClick} className={style.addColumnButton}><BsPlusLg
                className={style.plusSVG}/>Добавить
                еще одну колонку
            </Button>
        </div>
    );
};

export default HomeScreen;