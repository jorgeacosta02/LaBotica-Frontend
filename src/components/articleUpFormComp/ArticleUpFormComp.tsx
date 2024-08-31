import styles from './_ArticleUpFormComp.module.scss';
import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageComp from '../messageComp/MessageComp';
import { IArticleData } from '../../interfaces/articleInterfaces';
import { selectMessageState, toggleMessage } from '../../redux/slices/messageSlice';
// import ImageUploading, { ImageListType } from 'react-images-uploading';

// Define el tipo de artículo que puede ser usado para los errores
interface ArticleErrors {
  name?: string;
  description?: string;
  size?: string;
  price?: string;
}

const ArticleUpFormComp = () => {
  // Estados globales para opciones
  const messageState = useSelector(selectMessageState).message;
  const dispatch = useDispatch();

  // Estado de datos del formulario
  const [formInfo, setFormInfo] = useState<IArticleData>({
    name: '',
    description: '',
    size: '',
    price: '',
  });

  // Estado de errores del formulario
  const [errors, setErrors] = useState<ArticleErrors>({
    name: '',
    description: '',
    size: '',
    price: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    submitForm();
  };

  const messageHandleClick = () => {
    dispatch(toggleMessage());
  };

  const submitForm = async () => {
    try {

      let response: any = await axios.post('/article-register', formInfo);
      console.log(response.data);
   

      setFormInfo({
        name: '',
        description: '',
        size: '',
        price: '',
      });
      messageHandleClick();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.backImgContainer}></div>
      <div className={styles.backImgCover}></div>
      <h3 className={styles.mainTitle}>Alta de artículo</h3>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.dataContainer}>
            <div className={styles.inputBlock}>
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formInfo.name}
                onChange={handleInputChange}
                placeholder="Ingrese nombre..."
                className={styles.input}
              />
              {errors.name && (
                <p className={styles.errorMessage}>{errors.name}</p>
              )}
            </div>
            <div className={styles.inputBlock}>
              <label htmlFor="description">Descripción:</label>
              <input
                type="text"
                id="description"
                name="description"
                value={formInfo.description}
                onChange={handleInputChange}
                placeholder="Ingrese descripción..."
                className={styles.input}
              />
              {errors.description && (
                <p className={styles.errorMessage}>{errors.description}</p>
              )}
            </div>
            <div className={styles.inputBlock}>
              <label htmlFor="unit">Unidad de medida:</label>
              <input
                type="text"
                id="unit"
                name="unit"
                value={formInfo.size}
                onChange={handleInputChange}
                placeholder="Ingrese unidad de medida..."
                className={styles.input}
              />
              {errors.size && (
                <p className={styles.errorMessage}>{errors.size}</p>
              )}
            </div>
            <div className={styles.inputBlock}>
              <label htmlFor="price">Precio:</label>
              <input
                type="text"
                id="price"
                name="price"
                value={formInfo.price}
                onChange={handleInputChange}
                placeholder="Ingrese precio..."
                className={styles.input}
              />
              {errors.price && 
                <p className={styles.errorMessage}>{errors.price}</p>
              }
            </div>
            </div>
            <div className={styles.submitContainer}>
              <button
                className={styles.submit}
                type="submit"
              >
                Enviar formulario
              </button>
            </div>
          </form>
          <div className={styles.linksContainer}>
            <Link
              to="/intranet"
              className={styles.link}
            >
              Volver a Intranet
            </Link>
          </div>
        </div>
        {messageState && (
          <MessageComp
            data="Mensaje enviado exitosamente"
          />
        )}
      </div>
    );
  };
  
  export default ArticleUpFormComp;

