import { NavLink } from 'react-router-dom'
import styles from './_ArticleCardsComp.module.scss'
import elbosque from '../../assets/images/links/Portal.jpg'

const CatalogComp = () => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.mainTitle}>
        Catálogo
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

export default CatalogComp
