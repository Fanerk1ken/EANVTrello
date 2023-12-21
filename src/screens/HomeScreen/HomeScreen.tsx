// тут все компоненты
import style from './HomeScreen.module.scss'
import { BsPlusLg } from "react-icons/bs";
import tasks from '../../utils/mock/tasks.json'
import {Column} from "../../components/Column";


const HomeScreen = () => {
    return (
        <div className={style.container}>
            <Column title={'Column Title1'} tasks={tasks}/>
            <Column title={'Column Title2'} tasks={tasks}/>
            <button className={style.addColumnButton}><BsPlusLg className={style.plusSVG}/>Добавить еще одну колонку</button>
        </div>
    );
};

export default HomeScreen;