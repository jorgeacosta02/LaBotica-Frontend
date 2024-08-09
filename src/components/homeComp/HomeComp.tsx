import styles from './_HomeComp.module.scss'
import SliderComp from '../sliderComp/SliderComp';


const HomeComp = () => {
  
  return (
    <div className={styles.mainContainer}>
      <SliderComp/>
      <div className={styles.dataContainer}>
        <h5
          className={styles.role}
        >
          Servicio de administración de consorcios eficiente y transparente, entendiendo que la administración de un consorcio requiere una atención meticulosa y un enfoque personalizado.
        </h5>
        <h5
          className={styles.role}
        >
          Toda la información de gestión actualizada y disponible de forma permanente para los miembros del consorcio.
        </h5>
      </div>
    </div>
  );
}

export default HomeComp;