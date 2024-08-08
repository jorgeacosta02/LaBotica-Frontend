import { NavLink } from "react-router-dom";
import styles from './_navBarNavListComp.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { selectMenuState, falseMenu } from "../../redux/slices/menuSlice";

const NavBarNavListComp = () => {

  const menuState = useSelector(selectMenuState).menu;

  const dispatch = useDispatch<any>();

  const handleClick = () => {
    console.log('click en NavLixt');
    dispatch(falseMenu() );
  };

  const navListStyles = `${styles.navList} ${menuState ? styles.show : ''}`;

  return (
    <ul className={navListStyles} >
        <li onClick={handleClick} >
          <NavLink
            to="/" 
            className={styles.navLink} 
           >Inicio</NavLink>
        </li>
        <li className={styles.splitBar}></li>
        {/* <li onClick={handleClick} >
          <NavLink
            to="/company" 
            className={styles.navLink} 
           >Empresa</NavLink>
        </li> */}
        {/* <li className={styles.splitBar}></li> */}
        <li onClick={handleClick} >
          <NavLink
            to="/services" 
            className={styles.navLink} 
           >Servicios</NavLink>
        </li>
        <li className={styles.splitBar}></li>
        <li onClick={handleClick} >
          <NavLink
            to="/equipment" 
            className={styles.navLink} 
           >Equipos</NavLink>
        </li>
        <li className={styles.splitBar}></li>
        <li onClick={handleClick} >
          <NavLink
            to="/jobs" 
            className={styles.navLink} 
           >Trabajos</NavLink>
        </li>
        <li className={styles.splitBar}></li>
        <li onClick={handleClick} >
          <NavLink
            to="/intranet" 
            className={styles.navLink} 
           >Intranet</NavLink>
        </li>
        <li className={styles.splitBar}></li>
        <li onClick={handleClick} >
          <NavLink
            to="/contact" 
            className={styles.navLink} 
           >Contacto</NavLink>
        </li>
      </ul>
  )
}

export default NavBarNavListComp
