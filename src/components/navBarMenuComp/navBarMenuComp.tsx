import styles from './_navBarMenuComp.module.scss';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../redux/slices/menuSlice';
// import { selectMenuState } from '../../redux/slices/menuSlice';

const NavBarMenuComp = () => {

  const dispatch = useDispatch<any>();
 
  // const menuState = useSelector(selectMenuState).menu;

  const handleClick = () => {
    dispatch(toggleMenu() );
  };

  return (
    <div className={styles.container}>
      <svg
        className={styles.menu}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="3 3 18 18" 
        onClick={handleClick}
      >
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
      </svg>
    </div>
  )
}

export default NavBarMenuComp
