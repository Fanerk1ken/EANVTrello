import style from './SideBar.module.scss'
import {useState} from "react";
import logo from '../../assets/images/logo.png'
import { IoMdArrowDropleft } from "react-icons/io";
import { TbLayoutBoardSplit } from "react-icons/tb";
import { IoPeopleOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";


const SideBar = () => {
    const [openSideBar, setOpenSideBar] = useState(true)


    const handleIsOpen = () => {
        setOpenSideBar(!openSideBar);
    };

    const sidebarContent = (
        <div className={`${style.sideBar} ${openSideBar ? style.sideBarOpen : style.sideBarClose}`}>
            <nav className={style.sideBarContent}>
                <header>
                    <div className={style.imageText}>
                        <span className={style.image}>
                            <img src={logo} alt="logo"/>
                        </span>
                        <div className={style.textHeaderText}>
                                <span className={style.name}>Хайпарики</span>
                                <span className={style.tariff}>Бесплатно</span>
                        </div>
                        <IoMdArrowDropleft className={`${style.sideBarButton} ${openSideBar ? style.buttonClose : style.buttonOpen}`} onClick={handleIsOpen} size={'1.5rem'} color={'white'}/>
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
                </header>
            </nav>
        </div>
    );

    return (
        <>
            <div className={style.sideBarClose}>
                {/*<CSSTransition*/}
                {/*    in={openSideBar}*/}
                {/*    timeout={200}*/}
                {/*    classNames={{*/}
                {/*        enter: style.sidebarAnimationEnter,*/}
                {/*        enterActive: style.sidebarAnimationEnterActive,*/}
                {/*        exit: style.sidebarAnimationExit,*/}
                {/*        exitActive: style.sidebarAnimationExitActive,*/}
                {/*    }}*/}
                {/*    unmountOnExit*/}
                {/*>*/}
                {/*    {status => {*/}
                {/*        if (status === 'exited') {*/}
                {/*            return null;*/}
                {/*        }*/}
                {/*        return sidebarContent;*/}
                {/*    }}*/}
                {/*</CSSTransition>*/}
                {sidebarContent}
                {/*{openSideBar ? null : <div className={style.openingButton}>*/}
                {/*    <MdArrowRight className={style.buttonOpen} onClick={handleIsOpen} size={'1.5rem'} color={'white'}/>*/}
                {/*</div>}*/}
            </div>
        </>
    );
};

export default SideBar;