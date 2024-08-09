import { NavLink } from 'react-router-dom'
import styles from './_ClientsComp.module.scss'
import elbosque from '../../assets/images/links/Portal.jpg'

const ClientsComp = () => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.mainTitle}>
        Clientes
      </h2>
      <div className={styles.dataContainer}>
        <div className={styles.clientContainer}>
            <NavLink
             to='/elbosque'
             className={styles.clientLink}
            >
                <img
                    src={elbosque}
                    alt="Imagen El Bosque"
                    className={styles.clientImg}
                />
                <p className={styles.client}>
                    Complejo Residencial El Bosque
                </p>
            </NavLink>
        </div>
        <div className={styles.clientContainer}>
            <NavLink
             to='/elbosque'
             className={styles.clientLink}
            >
                <img
                    src={elbosque}
                    alt="Imagen El Bosque"
                    className={styles.clientImg}
                />
                <p className={styles.client}>
                    Demo
                </p>
            </NavLink>
        </div>
      </div>
    </div>
  )
}

export default ClientsComp
