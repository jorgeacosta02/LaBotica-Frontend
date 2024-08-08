import styles from './_InquiryComp.module.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { selectLangState } from '../../redux/slices/langSlice';
import { getAllInquiriesAction } from '../../redux/actions/inquiryActions';
import { selectInquiryState } from '../../redux/slices/inquirySlice';
import InqSingleComp from './InqSingleComp';
import { selectArticleState } from '../../redux/slices/articleSlice';
import { getAllArticlesAction } from '../../redux/actions/articleActions';
import { IArticleFormDB } from '../../Interfaces/articleInterfaces';
import { getAllLocationsAction } from '../../redux/actions/locationActions';
import { selectLangState } from '../../redux/slices/langSlice';
import { Link } from 'react-router-dom';
import { selectLocationState } from '../../redux/slices/locationSlice';



const InquiryComp = () => {

  const langState = useSelector(selectLangState).lang
  const locationState = useSelector(selectLocationState).data
  const articleState = useSelector(selectArticleState).data
  const inquiryState = useSelector(selectInquiryState).data

  const dispatch = useDispatch();

  const [options, setOptions] = useState({
    article:'',
    group1:'',
    group2:'',
    brand:'',
    location:'',
    quantity:''
  })

  const start = async () =>{
    await dispatch(getAllInquiriesAction());
    await dispatch(getAllArticlesAction());
    await dispatch(getAllLocationsAction());
  }

  useEffect(()=>{
    start()
  },[]);
 
  const handleChange =(event:any)=>{
    const { name, value } = event.target;
    setOptions((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Obtener una lista de nombres únicos de los artículos
  const uniqueArticleNames: any[] = Array.from(new Set<IArticleFormDB>(articleState.map((art:any) => art.name)));
  // Obtener una lista de nombres únicos de los artículos
  const uniqueGroup1Names: any[] = Array.from(new Set<IArticleFormDB>(articleState.map((art:any) => art.group1)));
  // Obtener una lista de nombres únicos de los artículos
  const uniqueGroup2Names: any[] = Array.from(new Set<IArticleFormDB>(articleState.map((art:any) => art.group2)));
  // Obtener una lista de nombres únicos de los artículos
  const uniqueBrandNames: any[] = Array.from(new Set<IArticleFormDB>(articleState.map((art:any) => art.brand)));
  // Obtener una lista de nombres únicos de los artículos
  const uniqueLocationNames: any[] = Array.from(new Set<IArticleFormDB>(locationState.map((art:any) => art.name)));
  

  console.log('options: ', options)
  console.log('inquiryState: ', inquiryState);
  console.log('articleState: ', articleState);
  console.log('locationState: ', locationState)
  console.log('uniqueArticleNames: ', uniqueArticleNames)
  console.log('uniqueGroup1Names: ', uniqueGroup1Names)
  console.log('uniqueGroup2Names: ', uniqueGroup2Names)
  console.log('uniqueBrandNames: ', uniqueBrandNames)
  console.log('uniqueLocationNames: ', uniqueLocationNames)


  const cleanFiltersHandler = () => {
    setOptions({
      article:'',
      group1:'',
      group2:'',
      brand:'',
      location:'',
      quantity:''
    })
  }


  const filteredInquiryState = inquiryState
    .filter((inq:any) => 
    (!options.article || inq.article.name === options.article) && 
    (!options.group1 || inq.article.group1 === options.group1) && 
    (!options.group2 || inq.article.group1 === options.group2) && 
    (!options.brand || inq.article.brand === options.brand) && 
    (!options.location || inq.location.name === options.location)
  )

  console.log('filteredInquiryState: ', filteredInquiryState)

  const ordered1 = filteredInquiryState.sort((a:any, b:any) => {
    // Comparar por 'name' dentro de 'article'
    const nameA = a.article.name.toUpperCase();
    const nameB = b.article.name.toUpperCase();
  
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // Si 'name' es el mismo, comparar por 'group1' dentro de 'article'
    const group1A = a.article.group1.toUpperCase();
    const group1B = b.article.group1.toUpperCase();
  
    if (group1A < group1B) {
      return -1;
    }
    if (group1A > group1B) {
      return 1;
    }
  
    // Si 'group1' es el mismo, comparar por 'group2' dentro de 'article'
    const group2A = a.article.group2.toUpperCase();
    const group2B = b.article.group2.toUpperCase();
  
    if (group2A < group2B) {
      return -1;
    }
    if (group2A > group2B) {
      return 1;
    }
  
    // Si 'group2' es el mismo, comparar por 'brand' dentro de 'article'
    const brandA = a.article.brand.toUpperCase();
    const brandB = b.article.brand.toUpperCase();
  
    if (brandA < brandB) {
      return -1;
    }
    if (brandA > brandB) {
      return 1;
    }
  
    // Si 'brand' es el mismo, comparar por 'name' dentro de 'location'
    const locationA = a.location.name.toUpperCase();
    const locationB = b.location.name.toUpperCase();
  
    if (locationA < locationB) {
      return -1;
    }
    if (locationA > locationB) {
      return 1;
    }
  
    // Si todas las propiedades son iguales
    return 0;
  });

  console.log('ordered1: ', ordered1)


  return (
    <div className={styles.container}>
      <div className={styles.backImgContainer}></div>
      <div className={styles.backImgCover}></div>
      <h3 className={styles.mainTitle}>
        Consultas
      </h3>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <div className={styles.dataContainer}>
            <button
              className={styles.cleanFilters}
              onClick={cleanFiltersHandler}
            >
              Limpiar filtros
            </button>
            <div className={styles.selectBlock}>
              <label 
                htmlFor='article'>
                {langState === 'es' ? 'Artículo' : 'Article'}
              </label>
              <select
                className={styles.select}
                id="article"
                name="article"
                value={options.article}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Seleccionar un artículo
                </option>
                {uniqueArticleNames.map((name, index) => (
                  <option key={index} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.selectBlock}>
              <label 
                htmlFor='group1'>
                {langState === 'es' ? 'Grupo 1' : 'Group 1'}
              </label>
              <select
                className={styles.select}
                id="group1"
                name="group1"
                value={options.group1}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Seleccionar Grupo 
                </option>
                {uniqueGroup1Names.map((name, index) => (
                  <option key={index} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.selectBlock}>
              <label 
                htmlFor='group2'>
                {langState === 'es' ? 'Grupo 2' : 'Group 2'}
              </label>
              <select
                className={styles.select}
                id="group2"
                name="group2"
                value={options.group2}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Seleccionar Grupo 
                </option>
                {uniqueGroup2Names.map((name, index) => (
                  <option key={index} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.selectBlock}>
              <label 
                htmlFor='brand'>
                {langState === 'es' ? 'Marca' : 'Brand'}
              </label>
              <select
                className={styles.select}
                id="brand"
                name="brand"
                value={options.brand}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Seleccionar Marca
                </option>
                {uniqueBrandNames.map((name, index) => (
                  <option key={index} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.selectBlock}>
              <label 
                htmlFor='location'>
                {langState === 'es' ? 'Locación' : 'Location'}
              </label>
              <select
                className={styles.select}
                id="location"
                name="location"
                value={options.location}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Seleccionar Locación
                </option>
                {uniqueLocationNames.map((name, index) => (
                  <option key={index} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        <div className={styles.logsContainer}>
          {
            filteredInquiryState.map((inq:any) => (
              <div key={inq.id}>
                <InqSingleComp
                  article={inq.article.name}
                  group1={inq.article.group1}
                  group2={inq.article.group2}
                  brand={inq.article.brand}
                  location={inq.location.name}
                  quantity={inq.amount}
                />
              </div>
            ))
          }
        </div>
        </div>
        <div className={styles.linksContainer}>
          <Link
            to='/intranet'
            className={styles.link}
          >
            Volver a Intranet
          </Link>
        </div>
      </div>
    </div>
  )
}

export default InquiryComp

