import { NavLink, Outlet } from 'react-router-dom';
import React,{useState} from 'react';
import style from "./Layout.module.css"
import Registration from '../Registration/Registration';

const setActive = ({ isActive }) => isActive ? style.active + " " + style.link : style.link;
const Layout = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => setClicked(true);
    
    return (
        <React.Fragment>
            <header className={style.header}>
                <div><NavLink to="/" className={setActive}>Главная страница</NavLink>
                    <NavLink to='cats' className={setActive}>Кошки</NavLink>
                    <NavLink to='dogs' className={setActive}>Собаки</NavLink>
                    <NavLink to="how-to-care" className={setActive}>Как ухаживать</NavLink>
                    <NavLink to="hospitals" className={setActive}>Ветклиники</NavLink></div>
            <button onClick={handleClick} >Registration</button>
              
                {clicked && (
                    <Registration setActive={setClicked}/>
              )}  
            </header>

            <main><Outlet /></main>
            <footer className={style.footer}>
            
                <div>
                    <button className={style.button} onClick={() => window.location.assign('https://t.me/myaaaau')}> Нажми сюда, если у тебя возникнут вопросы</button>
                </div>
                <p>© 2022</p>
            </footer>
        </React.Fragment>
    )
}

export default Layout;