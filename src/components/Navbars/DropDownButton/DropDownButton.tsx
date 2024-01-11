import {FC, ReactNode, useState} from 'react'
import {useRef} from "react";
import {IoIosArrowDown} from 'react-icons/io'
import style from '../MainNavbar/MainNavbar.module.scss'
import {useClickOutside} from "../../../utils/hook/useClickOutside.ts";

interface DropDownButtonProps {
    children: ReactNode
    className?: string
    onSelect: (arg: string) => void
    subOptions: string[]
}

const DropDownButton: FC<DropDownButtonProps> = ({
                                                     children,
                                                     className,
                                                     onSelect,
                                                     subOptions,
                                                 }) => {
    const [isOpen, setIsOpen] = useState(false)
    const buttonRef = useRef(null)
    const sectionRef = useRef(null)

    useClickOutside([buttonRef, sectionRef], () => {
        setIsOpen(false)
    })
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={style.dropdownContainer}>
            <button ref={buttonRef} className={className} onClick={handleToggle}>
                {children} <IoIosArrowDown className={style.downArrow}/>
            </button>
            {isOpen && (
                <section className={style.dropDownSelect} ref={sectionRef}>
                    {subOptions.map(subOption => (
                        <button
                            key={subOption}
                            onClick={() => onSelect(subOption)}
                            className={style.dropdownSelectItem}
                        >
                            {subOption}
                        </button>
                    ))}
                </section>
            )}
        </div>
    )
}

export default DropDownButton
