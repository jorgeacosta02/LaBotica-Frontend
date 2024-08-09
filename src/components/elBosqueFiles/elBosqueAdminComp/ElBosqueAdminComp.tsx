import BackButtonComp from '../../backButtonComp/BackButtonComp';
import styles from './_ElBosqueAdminComp.module.scss';

const ElBosqueAdminComp = () => {
    
    
    const tasks = [
        
        {
            fecha: '10-07-2024',
            tema: 'Naturgy, lectura de medidores',
            detalle: 'Presentación nota dirigida a la sección de Control de Medición, reforzando el trámite de atención al cliente del día 05-07-2024. Se imprimieron carteles para colocar en garita y en el portón de servicio con el número de teléfono de garita.',
        },
        {
            fecha: '05-07-2024',
            tema: 'Naturgy, lectura de medidores',
            detalle: 'Presentación del caso en atención al cliente de Naturgy, dejando solicitud de prórroga de suspensión y proporcionando el número telefónico de tarita para solicitar apertura.',
        },
        {
            fecha: '04-07-2024',
            tema: 'Adecuación',
            detalle: 'A pedido del Escribano, me dirijo a escribanía para retirar listado con diferencias de mensura y coordinar reunión con Agrimensor.',
        },
        {
            fecha: '04-07-2024',
            tema: 'Naturgy, lectura de medidores',
            detalle: 'Comunicación telefónica en la cual me informan que el trámite debe realizarse por atención al cliente para conocer el motivo de la imposibilidad de lectura.',
        },
        {
            fecha: '03-07-2024',
            tema: 'Portón de servicio',
            detalle: 'Se repararon las guías del portón de servicio.',
        },
        {
            fecha: '25-06-2024',
            tema: 'Reflectores de portón principal.',
            detalle: 'Se compraron y colocaron dos reflectores led nuevos en la entrada principal.',
        },
        {
            fecha: '21-06-2024',
            tema: 'Reclamo en municipalidad de Rawson.',
            detalle: 'Realicé reclamo presencial en Municipalidad de Rawson, n° 5288 en sección alumnrado púbilic, para solicitar reemplazo de luminarias fuera de funcionamiento en calle Aguas Blancas.',
        },
        {
            fecha: '10-06-2024',
            tema: 'Cámaras de seguridad',
            detalle: 'Se colocó cableado y se dejaron funcionando las 4 cámaras de seguridad, entrada y salida principal, interior de garita y portón de servicio.',
        },
        {
            fecha: '07-06-2024',
            tema: 'Limpieza de frente',
            detalle: 'Se completó la limpieza de verdes del frente hacia calle Aguas Blancas.',
        },
        {
            fecha: '05-06-2024',
            tema: 'Compra de herramientas',
            detalle: 'Se comprpó y entregó a personal de mantenimiento, rastrillo metálico para limpiza de verdes.',
        },
        {
            fecha: '27-05-2024',
            tema: 'Adecuación',
            detalle: 'Imprimo plano de catastro y llevo a Escribanía.',
        },
        {
            fecha: '24-05-2024',
            tema: 'Adecuación',
            detalle: 'Me presento en oficinas de Catastro para solicitar archivo de plano de mensura del Loteo, a pedido de Escribano.',
        },
        {
            fecha: '04-05-2024',
            tema: 'Artículos de limpieza',
            detalle: 'Se abastece garita de artículos de limpieza.',
        },
    ]

  return (
    <div 
        className={styles.mainContainer}
    >
        <BackButtonComp/>
        <h3 className={styles.mainTitle}>
            Administración
        </h3>
        <div className={styles.infoContainer}>
            <h4 className={styles.title}>
                Administrador:
            </h4>
            <p className={styles.text}>
                Nombre: Jorge Acosta
            </p>
            <p className={styles.text}>
                Teléfono: 2646730581
            </p>
            <p className={styles.text}>
                Email: jorgeacostadeleon@yahoo.com
            </p>
            <h4 className={styles.title}>
                Gestiones Realizadas:
            </h4>
            <ul>
                {tasks.map(task => {
                    return (
                        <li 
                            className={styles.li}
                        >
                            <p className={styles.text}>
                                Fecha: {task.fecha}
                            </p>
                            <p className={styles.text}>
                                Tema: {task.tema}
                            </p>
                            <p className={styles.text}>
                                Detalle: {task.detalle}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default ElBosqueAdminComp
