import style from "./SecondNavbar.module.scss";
import {FaRegStar} from "react-icons/fa";
import {RiGroupLine} from "react-icons/ri";
import {RiTrelloLine} from "react-icons/ri";
import {IoIosArrowDown} from "react-icons/io";
import {IoIosMore} from "react-icons/io";
import {IoRocketOutline} from "react-icons/io5";
import {IoFilterSharp} from "react-icons/io5";
import {BsFillLightningFill} from "react-icons/bs";
import {AiOutlineUserAdd} from "react-icons/ai";

const SecondNavbar = () => {
    return (
        <div className={style.backgroundContainer}>
            <header className={style.header}>
                <div className={style.logo}>EANVTrello</div>
                <div className={style.dropdownMenu}>
                    <button className={style.secNavButton}>
                        <FaRegStar size={'16px'}/>
                    </button>
                    <button className={style.secNavButton}>
                        <RiGroupLine className={style.icon}/>
                        Для рабочего пространства
                    </button>
                    <button className={style.whiteButton}>
                        <RiTrelloLine size={'14px'} className={style.thirdIcon}/>
                        По доске
                    </button>
                    <button className={style.secNavButton}>
                        <IoIosArrowDown size={'20px'}/>
                    </button>
                    <section className={style.rightSection}>
                        <button className={style.secNavButton}>
                            <IoRocketOutline className={style.thirdIcon}/>
                            Улучшения
                        </button>
                        <button className={style.secNavButton}>
                            <BsFillLightningFill className={style.thirdIcon}/>
                            Автоматизация
                        </button>
                        <button className={style.secNavButton}>
                            <IoFilterSharp className={style.thirdIcon}/>
                            Фильтры
                        </button>
                        <span className={style.divider}></span>
                        {/*<RxAvatar size={'24px'} color={'#9fadbc'}/>*/}
                        <button className={style.whiteButton}>
                            <AiOutlineUserAdd className={style.thirdIcon}/>
                            Поделиться
                        </button>
                        <button className={style.secNavButton}>
                            <IoIosMore size={'20px'}/>
                        </button>
                    </section>
                </div>
            </header>
        </div>
    )
}

export default SecondNavbar