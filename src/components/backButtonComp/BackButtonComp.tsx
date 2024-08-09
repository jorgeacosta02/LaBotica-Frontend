import styles from './_BackButtonComp.module.scss';
import { NavLink } from 'react-router-dom';


const BackButtonComp = () => {
  return (
    <div>
      <NavLink
            to='/elbosque'
            className={styles.back}
      >
        Volver
      </NavLink>
    </div>
  )
}

export default BackButtonComp
