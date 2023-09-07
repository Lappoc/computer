import { Logo } from "../Logo/Logo"

export const Menu = () => {
    return(
        <nav className='mask'>
            <Logo/>
            <ul className="list">
                <li><a href="#">Главная</a></li>
                <li><a href="#">Курсы</a></li>
                <li><a href="#">Расписание</a></li>
                <li><a href="#">Преподаватели</a></li>
                <li><a href="#">Рассылка</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
            <button className="log_in">Зайти в кабинет</button>
        </nav>
    )
}