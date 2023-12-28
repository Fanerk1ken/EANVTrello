import {HomeScreen} from "../../screens/HomeScreen";
import {SideBar} from "../../components/SideBar";
import style from './HomePage.module.scss'

const HomePage = () => {
    return (
        <>
            <div className={style.homePage}>
                <SideBar/>
                <HomeScreen />
            </div>

        </>

    );
};

export default HomePage;