import styles from './_LocationUpFormComp.module.scss';
import { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MessageComp from '../messageComp/MessageComp';
import { ILocationData } from '../../Interfaces/locationInterfaces';
import { selectLangState } from '../../redux/slices/langSlice';
import { selectMessageState, toggleMessage } from '../../redux/slices/messageSlice';



const LocationUpFormComp = () => {

   // Estados globales para opciones
  const langState = useSelector(selectLangState).lang;
  const messageState = useSelector(selectMessageState).message;
  const dispatch = useDispatch()
   
  // Estado de datos del formulario
  const [formData, setFormData] = useState<ILocationData>({
    name:'',
    description:'',
  });
 
   // Estado de errores del formulario
   const [errors, setErrors] = useState<ILocationData>({
    name:'',
    description:'',
   });
   
   // Comprobación de estados para enviar formulario
   let submitOk = false;
  
  if(
    formData.name !== '' &&
    formData.description !== ''
  ){
    submitOk = true;
  };
   
   // Expresiones de validación
  //  const nameRegExp = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]*$/;
  //  const emailRegExp = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
 
   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     const { name, value } = e.target;
         setFormData((prevData) => ({
           ...prevData,
           [name]: value,
         }));
         setErrors((prevData) => ({
           ...prevData,
           [name]: '',
         }));
   }
 
   const emptyMessage = langState === 'es' ?
     'Este campo debe ser completado.' :
     'This field must be filled out.';
 
   const emptyValidationHandler =()=>{
     if(!formData.name){
       setErrors((prevData) => ({
         ...prevData,
         firstName: emptyMessage,
       }));
     };
     if(!formData.description){
       setErrors((prevData) => ({
         ...prevData,
         email: emptyMessage,
       }));
     };
   
   };
   
   
   const handleSubmit = (event:any) => {
     event.preventDefault();
     console.log('submit')
     if(!submitOk) return emptyValidationHandler();
     submitForm();
   }
   
   const messageHandleClick = () => {
     dispatch( toggleMessage() );
   };
 
   const submitForm = async () => {
     try{
       const response = await axios.post(
         'http://localhost:5000/location',
          formData
       );
       console.log('response', response.status);
       // queryResponse = await response.status;
      setFormData({
        name:'',
        description:'',
      })
 
       messageHandleClick()

     }catch(error:any){
       console.log(error.message)
     }
   }

  
  return (
    <div className={styles.container}>
      <div className={styles.backImgContainer}></div>
      <div className={styles.backImgCover}></div>
      <h3 className={styles.mainTitle}>
        Alta de locación
      </h3>
      <div className={styles.formContainer}>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <div className={styles.dataContainer}>
          <div className={styles.inputBlock}>
            <label 
              htmlFor='name'>
              {langState === 'es' ? 'Nombre' : 'Name'}
            </label>
            <input
              type='text'
              id='name'
              name='name' 
              value={formData.name}
              onChange={handleInputChange} 
              placeholder={langState === 'es' ? 'Ingrese nombre...' :  'Enter first name...'}
              className={styles.input}
            />
            {
              errors.name 
              && 
              <p className={styles.errorMessage}>
                {errors.name}
              </p>
            }
          </div>
          <div className={styles.inputBlock}>
            <label 
              htmlFor='description'>
              {langState === 'es' ? 'Descripción' : 'Description'}
            </label>
            <input
              type='text'
              id='description'
              name='description' 
              value={formData.description}
              onChange={handleInputChange} 
              placeholder={langState === 'es' ? 'Ingrese descripción...' :  'Enter description...'}
              className={styles.input}
            />
            {
              errors.description 
              && 
              <p className={styles.errorMessage}>
                {errors.description}
              </p>
            }
          </div>
        </div>
        <div className={styles.submitContainer}>
            <button
              className={styles.submit}
              type='submit'
            >
              Enviar formulario
            </button>
          </div>
        </form>
        <div className={styles.linksContainer}>
          <Link
            to='/intranet'
            className={styles.link}
          >
            Volver a Intranet
          </Link>
        </div>
        </div>
        { messageState && 
          <MessageComp
            data={
              langState === 'es' ?
              'Mensaje enviado exitosamente' :
              'Message sent successfully'
            }
          />
        }
    </div>
  )
}

export default LocationUpFormComp

