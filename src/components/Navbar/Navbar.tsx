import style from './Navbar.module.scss'

const Navbar = () => {
    return (
        <div className={style.backgroundContainer}>
            <header className={style.header}>
                <div className={style.logo}>
                    EANVTrello
                </div>
                <div className={`${style.dropdownMenu} ${style.flexContainer}`}>
                    <div className={style.leftSection}>
                        <select className={style.select} name="Рабочие пространства" id="">
                            <option className={style.option} value="">Рабочие пространства Trello</option>
                            <option className={style.option} value="">Хайпарики</option>
                        </select>
                        <select className={style.select} name="Недавние" id="">
                            <option className={style.option} value="">Моя фанера</option>
                            <option className={style.option} value="">Моя доска Trello</option>
                        </select>
                        <select className={style.select} name="В избранном" id="">
                            <option className={style.option} value=""></option>
                        </select>
                        <select className={style.select} name="Шаблоны" id="">
                            <option className={style.option} value="">Company overview</option>
                            <option className={style.option} value="">Kanban template</option>
                            <option className={style.option} value="">Project managment</option>
                        </select>
                    </div>
                    <div className={style.rightSection}>
                        <button className={style.createButton}>Создать</button>
                    </div>
                </div>
            </header>
        </div>

    );
};

export default Navbar;