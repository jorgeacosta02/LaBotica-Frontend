import styles from './_NavBarLogoComp.module.scss';



const NavBarLogoComp = () => {

    
    return (
        <div className={styles.container}>
          <h4 className={styles.brand}>
            La Botica Natural
          </h4>
          <p className={styles.comment}>
            Productos naturales
          </p>
        </div>
    );
}

export default NavBarLogoComp;