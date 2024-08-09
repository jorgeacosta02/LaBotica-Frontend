import styles from './_ElBosqueComp.module.scss';
import resumen from '../../../assets/images/Expensas/ExpensasElBosque.jpg'
import { NavLink } from 'react-router-dom';

const ElBosqueComp = () => {
  return (
    <div className={styles.mainContainer}>
      <NavLink
            to='/'
            className={styles.back}
      >
        Volver a Inicio
      </NavLink>
      <h4 className={styles.mainTitle}>
        Complejo Residencial El Bosque
      </h4>
      <div className={styles.infoContainer}>
        <h4 className={styles.title}>
          Estado de deuda de expensas
        </h4>
        <div className={styles.expensasContainer}>
          <img 
            src={resumen} 
            alt="resumen"
            className={styles.resumen}
          />
        </div>
        <h4 className={styles.title}>
          Secciones
        </h4>
        <div className={styles.linksContainer}>
          <ul
            className={styles.ulLinks}
          >
            <li
              className={styles.liLink}
            >
              <NavLink
                to='/elbosque-info-general'
                className={styles.link}
                >
                Información general
              </NavLink>
            </li>
            <li
              className={styles.liLink}
            >
              <NavLink
                to='/elbosque-consorcistas'
                className={styles.link}
                >
                Consorcistas
              </NavLink>
            </li>
            <li
              className={styles.liLink}
            >
              <NavLink
                to='/elbosquereglam'
                className={styles.link}
                >
                Reglamento
              </NavLink>
            </li>
            <li
              className={styles.liLink}
            >
              <a
                className={styles.link}
                href="https://github.com/jorgeacosta02/Admin-frontend/raw/main/src/assets/ElBosqueFiles/PlanillaElBosque.xlsx" download="PlanillaElBosque.xlsx" target="_blank"
                >
                Descargar Planilla de movimientos
              </a>
            </li>
            <li
              className={styles.liLink}
            >
              <NavLink
                to='/elbosque-admin'
                className={styles.link}
                >
                Administración
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ElBosqueComp
