import styles from './_SliderComp.module.scss'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectMoonState } from '../../redux/slices/moonSlice';

// Importa tus imágenes
import img01 from '../../assets/images/slider/01.jpg';
import img02 from '../../assets/images/slider/02.jpg';
import img03 from '../../assets/images/slider/03.jpg';
import img04 from '../../assets/images/slider/04.jpg';
import img05 from '../../assets/images/slider/05.jpg';





const SliderComp = () => {

    const moonState = useSelector(selectMoonState);

    console.log(moonState)
  
    const [currentSlide, setCurrentSlide] = useState(0);
  
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 5);
      }, 5000); // Cambia a la siguiente imagen cada 3 segundos
  
      return () => clearInterval(interval);
    }, []); // Se ejecuta solo una vez al montar el componente
  
    console.log(currentSlide)
  
    // Define un arreglo con las imágenes
    const images = [
      img01,
      img02,
      img03,
      img04,
      img05,
    ];

    const backColor = `${styles.background} ${moonState.moon ? styles.bckgndWhite : ''}`;

    return (
        <div>
          <div className={styles.slider}>
          {images.map((image, index) => (
            <div
              className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
              key={index}
            >
              <img
                src={image}
                alt=""
                className={styles.img}
              />
            </div>
          ))}
        </div>
        <div className={backColor}></div>
        </div>
    )
}

export default SliderComp
