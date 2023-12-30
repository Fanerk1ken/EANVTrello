import style from './SideBar.module.scss'
import {useState} from "react";
import logo from '../../assets/images/logo.png'
import { TbLayoutBoardSplit } from "react-icons/tb";
import { IoPeopleOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowDropLeftLine } from "react-icons/ri";


const SideBar = () => {
    const [openSideBar, setOpenSideBar] = useState(true)


    const handleIsOpen = () => {
        setOpenSideBar(!openSideBar);
    };

    const sidebarContent = (
        <div className={`${style.sideBar} ${openSideBar ? style.sideBarOpen : style.sideBarClose}`}>
            <nav className={style.sideBarContent}>
                <div>
                    <div className={style.imageText}>
                        <span className={style.image}>
                            <img src={logo} alt="logo"/>
                        </span>
                        <div className={style.textHeaderText}>
                                <span className={style.name}>Хайпарики</span>
                                <span className={style.tariff}>Бесплатно</span>
                        </div>

                    </div>
                    <div className={style.containerWithMainSideBarContent}>
                        <div className={style.boards}>
                            <TbLayoutBoardSplit />
                            <span>Доски</span>
                        </div>
                        <div className={style.members}>
                            <IoPeopleOutline />
                            <span>Участники</span>
                            <GoPlus className={style.goPlus} size={'0.875rem'} color={'white'} />
                        </div>
                        <div className={style.settings}>
                            <IoSettingsOutline />
                                <span>Настройка рабочего пространства</span>
                            <IoIosArrowDown className={style.arrowDown} size={'0.875rem'} color={'white'} />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );

    return (
        <>
            <div className={`${style.sideBarWrapper} ${openSideBar ? style.sideBarWrapperOpen : style.sideBarWrapperClose}`}>
                <RiArrowDropLeftLine className={`${style.sideBarButton} ${openSideBar ? style.buttonClose : style.buttonOpen}`} onClick={handleIsOpen} color={'white'}/>
                {sidebarContent}
            </div>

        </>
    );
};

export default SideBar;