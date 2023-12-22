import style from './HomeScreen.module.scss'
import tasks from '../../utils/mock/tasks.json'
import {Column} from "../../components/Column";
import {ColumnGroup} from "../../components/ColumnGroup";




const HomeScreen = () => {
    return (
        <div className={style.container}>
            <Column title={'Column Title1'} tasks={tasks}/>
            <Column title={'Column Title2'} tasks={tasks}/>
            <ColumnGroup/>
        </div>
    );
};

export default HomeScreen;