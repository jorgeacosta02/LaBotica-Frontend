import styles from './_HomeComp.module.scss'
import SliderComp from '../sliderComp/SliderComp';


const HomeComp = () => {
  
  return (
    <div className={styles.mainContainer}>
      <SliderComp/>
      <div className={styles.dataContainer}>
        <p
          className={styles.role}
        >
          Bienvenidos a La Botica, tu tienda de confianza para el bienestar y la salud. Ofrecemos una amplia gama de productos de alta calidad, cuidadosamente seleccionados para satisfacer tus necesidades de salud y bienestar. Desde suplementos esenciales como el citrato de potasio y el citrato de magnesio hasta productos innovadores como la zeolita y el dióxido de cloro (CDS), en La Botica encontrarás todo lo necesario para cuidar de tu cuerpo de manera natural y efectiva.
        </p>
        <p
          className={styles.role}
        >
          Explora nuestro catálogo y descubre cómo nuestros productos pueden transformar tu bienestar.
        </p>
      </div>
    </div>
  );
}

export default HomeComp;