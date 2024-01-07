import {useState} from 'react'
import {DropDownButton} from './DropDownButton.tsx'
import style from './MainNavbar.module.scss'
import {optionsData} from './optionsData.ts'
import { CiCircleQuestion } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { IoMdNotificationsOutline } from "react-icons/io";
const MainNavbar = () => {

    const [selected, setSelected] = useState('')
    const handleSelect = (option: string, subOption: string) => {
        setSelected(`${option} - ${subOption}`)
    }

    return (
        <div className={style.backgroundContainer}>
            <header className={style.header}>
                <div className={style.logo}>EANVTrello</div>
                <div className={style.dropdownMenu}>
                    {Object.keys(optionsData).map((option) => (
                        <DropDownButton
                            key={option}
                            className={style.dropdownButton}
                            onSelect={subOption =>
                                handleSelect(option, subOption)
                            }
                            subOptions={optionsData[option]}
                        >
                            {option}
                        </DropDownButton>
                    ))}
                    <button className={style.createButton}>Создать</button>
                    <section className={style.rightSide}>
                        <IoMdNotificationsOutline size={'24px'} color={'#9fadbc'}/>
                        <RxAvatar size={'24px'} color={'#9fadbc'}/>
                        <CiCircleQuestion size={'25px'} color={'#9fadbc'}/>
                    </section>
                </div>
            </header>
        </div>
    )
}

export default MainNavbar
