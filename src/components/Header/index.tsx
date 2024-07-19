import React, {useContext} from 'react';
import styles from './header.module.scss'
import {Link, NavLink} from "react-router-dom";
import {CustomContext} from "../../context";

const Header = () => {
    const category = useContext(CustomContext)
    return (
        <div className={styles.header}>
            <Link to={'/'} className={styles.logo}>
                Рика и Морти
            </Link>
            <nav className={styles.nav}>
                <li onClick={() => category?.setCategory('character')}>
                    <NavLink className={({isActive}) => isActive ? styles.linkInner : styles.linkActive}
                             to={'/hero'}>Hero</NavLink>
                </li>
                <li onClick={() => category?.setCategory('location')}>
                    <NavLink className={({isActive}) => isActive ? styles.linkInner : styles.linkActive}
                             to={'/location'}>Location</NavLink>
                </li>
                <li onClick={() => category?.setCategory('episode')}>
                    <NavLink className={({isActive}) => isActive ? styles.linkInner : styles.linkActive}
                             to={'/episode'}>Episode</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? styles.linkInner : styles.linkActive}
                             to={'/register'}>Register</NavLink>
                </li>
            </nav>
        </div>
    );
};

export default Header;