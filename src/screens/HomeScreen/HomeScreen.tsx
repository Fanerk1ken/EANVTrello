import style from './HomeScreen.module.scss'
import {ColumnGroup} from "../../components/ColumnGroup";
import MainNavbar from "../../components/Navbars/MainNavbar/MainNavbar.tsx";
import SecondNavbar from "../../components/Navbars/SecondNavbar/SecondNavbar.tsx";


const HomeScreen = () => {
    return (
        <div className={style.container}>
            <MainNavbar />
            <SecondNavbar/>
            {/*<Column title={'Column Title1'} tasks={tasks}/>*/}
            {/*<Column title={'Column Title2'} tasks={tasks}/>*/}
            <ColumnGroup/>
        </div>
    );
};

export default HomeScreen;