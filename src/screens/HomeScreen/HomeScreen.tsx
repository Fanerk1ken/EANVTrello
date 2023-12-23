import style from './HomeScreen.module.scss'
import {ColumnGroup} from "../../components/ColumnGroup";
import Navbar from "../../components/Navbar/Navbar.tsx";


const HomeScreen = () => {
    return (
        <div className={style.container}>
            <Navbar/>
            {/*<Column title={'Column Title1'} tasks={tasks}/>*/}
            {/*<Column title={'Column Title2'} tasks={tasks}/>*/}
            <ColumnGroup/>
        </div>
    );
};

export default HomeScreen;