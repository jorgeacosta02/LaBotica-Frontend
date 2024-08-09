import styles from './_NavBarLogoComp.module.scss';



const NavBarLogoComp = () => {

    
    return (
        <div className={styles.container}>
          <h4 className={styles.brand}>
            Jorge Acosta
          </h4>
          <p className={styles.comment}>
            Administración de Consorcios
          </p>
        </div>
    );
}

export default NavBarLogoComp;