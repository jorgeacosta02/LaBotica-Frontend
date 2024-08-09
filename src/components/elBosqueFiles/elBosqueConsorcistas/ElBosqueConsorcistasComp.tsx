import BackButtonComp from '../../backButtonComp/BackButtonComp';
import styles from './_ElBosqueConsorcistasComp.module.scss';

const ElBosqueConsorcistasComp = () => {


    const consorcistas = [
        {
            lote: 1,
            info:[
                {
                    nombre: 'Hidalgo Javier',
                    telefono: '2644518852',
                    email: 'jahc15@hotmail.com',
                },
                {
                    nombre: 'Romero Silvana',
                    telefono: '2645650317',
                    email: '',
                },
            ]
        },
        {
            lote: 2,
            info:[
                {
                    nombre: 'Hidalgo Javier',
                    telefono: '2644518852',
                    email: 'jahc15@hotmail.com',
                },
                {
                    nombre: 'Romero Silvana',
                    telefono: '2645650317',
                    email: '',
                },
            ]
        },
        {
            lote: 3,
            info:[
                {
                    nombre: 'Terzi',
                    telefono: '',
                    email: '',
                },

            ]
        },
        {
            lote: 4,
            info:[
                {
                    nombre: 'Illanes',
                    telefono: '',
                    email: '',
                },
            ]
        },
        {
            lote: 5,
            info:[
                {
                    nombre: 'Quijano Juan Antonio',
                    telefono: '2646703944',
                    email: '',
                },
                {
                    nombre: 'Vila Emilce',
                    telefono: '2644442390',
                    email: 'emilce_vila@hotmail.com',
                },
            ]
        },
        {
            lote: 6,
            info:[
                {
                    nombre: 'Bazanelli Mariela',
                    telefono: '2644605620',
                    email: 'bazanm494@gmail.com',
                },
            ]
        },
        {
            lote: 7,
            info:[
                {
                    nombre: 'Alvarez Tomás',
                    telefono: '2646615824',
                    email: '',
                },
            ]
        },
        {
            lote: 8,
            info:[
                {
                    nombre: 'Suárez Roberto',
                    telefono: '2644523984',
                    email: '',
                },
                {
                    nombre: 'Duman',
                    telefono: '',
                    email: '',
                },
            ]
        },
        {
            lote: 9,
            info:[
                {
                    nombre: 'Mira Mariana',
                    telefono: '2644149513',
                    email: '',
                },
                {
                    nombre: 'García',
                    telefono: '',
                    email: '',
                },
            ]
        },
        {
            lote: 10,
            info:[
                {
                    nombre: 'Echegaray Rodrigo',
                    telefono: '2644544550',
                    email: '',
                },
            ]
        },
        {
            lote: 11,
            info:[
                {
                    nombre: 'Bordes Juan Carlos',
                    telefono: '2644160815',
                    email: 'juancarlosbordes@gmail.com',
                },
            ]
        },
        {
            lote: 12,
            info:[
                {
                    nombre: 'Perez Nelson',
                    telefono: '2645128708',
                    email: '',
                },
            ]
        },
        {
            lote: 13,
            info:[
                {
                    nombre: 'Ventimiglia Leandro',
                    telefono: '2645640111',
                    email: 'ventimiglialeandro@gmail.com',
                },
                {
                    nombre: 'Iglesia',
                    telefono: '',
                    email: '',
                },
            ]
        },
        {
            lote: 14,
            info:[
                {
                    nombre: 'Figueroa Andrés',
                    telefono: '2645667246',
                    email: '',
                },
            ]
        },
        {
            lote: 15,
            info:[
                {
                    nombre: 'Lepez Pedro',
                    telefono: '2644861894',
                    email: '',
                },
                {
                    nombre: 'Acosta María Cristina',
                    telefono: '2644856116',
                    email: '',
                },
            ]
        },
        {
            lote: 16,
            info:[
                {
                    nombre: 'Acosta Celso',
                    telefono: '2644367000',
                    email: 'celsoacosta@exploservice.com',
                },
                {
                    nombre: 'de León Lucía',
                    telefono: '',
                    email: '',
                },
            ]
        },
        {
            lote: 17,
            info:[
                {
                    nombre: 'Acosta Celso',
                    telefono: '2644367000',
                    email: 'celsoacosta@exploservice.com',
                },
                {
                    nombre: 'de León Lucía',
                    telefono: '',
                    email: '',
                },
            ]
        },
        {
            lote: 18,
            info:[
                {
                    nombre: 'Ventimiglia',
                    telefono: '2645692121',
                    email: '',
                },
                {
                    nombre: 'García',
                    telefono: '',
                    email: '',
                },
            ]
        },
        {
            lote: 19,
            info:[
                {
                    nombre: 'García Mabel',
                    telefono: '2644457584',
                    email: '',
                },
                {
                    nombre: 'García Gustavo',
                    telefono: '2644457603',
                    email: '',
                },
            ]
        },
        {
            lote: 20,
            info:[
                {
                    nombre: 'García Mabel',
                    telefono: '2644457584',
                    email: '',
                },
                {
                    nombre: 'García Gustavo',
                    telefono: '2644457603',
                    email: '',
                },
            ]
        },
        {
            lote: 21,
            info:[
                {
                    nombre: 'Villaverde Víctor',
                    telefono: '2644648162',
                    email: '',
                },
                {
                    nombre: 'Sirvente',
                    telefono: '',
                    email: '',
                },
            ]
        },
        {
            lote: 22,
            info:[
                {
                    nombre: 'Jofré Andrés',
                    telefono: '2645051239',
                    email: '',
                },
            ]
        },
        {
            lote: 23,
            info:[
                {
                    nombre: 'Rossini Bruno',
                    telefono: '2645433035',
                    email: '',
                },
            ]
        },
        {
            lote: 24,
            info:[
                {
                    nombre: 'Ozollo Federico',
                    telefono: '2644868000',
                    email: '',
                },
            ]
        },
        {
            lote: 25,
            info:[
                {
                    nombre: 'Garcés Nicolás',
                    telefono: '2645044761',
                    email: '',
                },
            ]
        },
        {
            lote: 26,
            info:[
                {
                    nombre: 'Fernández Yoel',
                    telefono: '2645609173',
                    email: '',
                },
                {
                    nombre: 'Pettazzi Pamela',
                    telefono: '2644625566',
                    email: '',
                },
            ]
        },
        {
            lote: 27,
            info:[
                {
                    nombre: 'Gioja César',
                    telefono: '2646716373',
                    email: '',
                },
                {
                    nombre: 'Dorgan Myriam',
                    telefono: '',
                    email: '',
                },
            ]
        },
        {
            lote: 28,
            info:[
                {
                    nombre: 'Campodónico Juan manuel',
                    telefono: '2644721079',
                    email: '',
                },
            ]
        },
        {
            lote: 29,
            info:[
                {
                    nombre: 'Flores Marcelo',
                    telefono: '2645094320',
                    email: '',
                },
            ]
        },
        {
            lote: 30,
            info:[
                {
                    nombre: 'Gómez Claudio',
                    telefono: '2644046101',
                    email: '',
                },
                {
                    nombre: 'Trigo Liliana',
                    telefono: '2645651515',
                    email: '',
                },
            ]
        },
        {
            lote: 31,
            info:[
                {
                    nombre: 'Dragani Santiago',
                    telefono: '2644055788',
                    email: 'estudiodragani@gmail.com',
                },
            ]
        },
        {
            lote: 32,
            info:[
                {
                    nombre: 'Aguilera Cristian',
                    telefono: '2645053312',
                    email: 'costamac@hotmail.com',
                },
            ]
        },
        {
            lote: 33,
            info:[
                {
                    nombre: 'Gioja César',
                    telefono: '2646716373',
                    email: '',
                },
                {
                    nombre: 'Dorgan Myriam',
                    telefono: '',
                    email: '',
                },
            ]
        },
        {
            lote: 34,
            info:[
                {
                    nombre: 'Gioja César',
                    telefono: '2646716373',
                    email: '',
                },
                {
                    nombre: 'Dorgan Myriam',
                    telefono: '',
                    email: '',
                },
            ]
        },
        {
            lote: 35,
            info:[
                {
                    nombre: 'Zuleta Diego',
                    telefono: '2645403173',
                    email: '',
                },
                {
                    nombre: 'Bustos Pía',
                    telefono: '2644151978',
                    email: 'mariapiabustos@outlook.com',
                },
            ]
        },
        {
            lote: 36,
            info:[
                {
                    nombre: 'Aciar Fernando',
                    telefono: '2645459201',
                    email: '',
                },
            ]
        },
        {
            lote: 37,
            info:[
                {
                    nombre: 'Pringles Lucas',
                    telefono: '2644604765',
                    email: '',
                },
            ]
        },
        {
            lote: 38,
            info:[
                {
                    nombre: 'Teruel',
                    telefono: '',
                    email: '',
                },
            ]
        },
        {
            lote: 39,
            info:[
                {
                    nombre: 'Herrero Carlos',
                    telefono: '2644392647',
                    email: '',
                },
                {
                    nombre: 'Garcés Claudia',
                    telefono: '2645064211',
                    email: '',
                },
                {
                    nombre: 'Herrero Guadalupe',
                    telefono: '2645885669',
                    email: '',
                },
            ]
        },
        {
            lote: 40,
            info:[
                {
                    nombre: 'Carosio Paula',
                    telefono: '2644169152',
                    email: 'paulaecarosio@gmail.com',
                },
                {
                    nombre: 'Leiva Facundo',
                    telefono: '2645745438',
                    email: '',
                },
            ]
        },
        {
            lote: 41,
            info:[
                {
                    nombre: 'Piriz Geraldine',
                    telefono: '+56984131566',
                    email: 'magnoliafloreria@hotmail.cl',
                },
            ]
        },
        {
            lote: 42,
            info:[
                {
                    nombre: 'Moya Fernando',
                    telefono: '2644114844',
                    email: 'fermoya@yahoo.com',
                },
                {
                    nombre: 'González',
                    telefono: '2644602433',
                    email: '',
                },
            ]
        },
        {
            lote: 43,
            info:[
                {
                    nombre: 'Gioja César',
                    telefono: '2646716373',
                    email: '',
                },
                {
                    nombre: 'Dorgan Myriam',
                    telefono: '',
                    email: '',
                },
            ]
        },
    ]

  return (
    <div 
        className={styles.mainContainer}
    >
        <BackButtonComp/>
        <h3 className={styles.mainTitle}>
            Consorcistas
        </h3>
        <div className={styles.infoContainer}>
            <ul>
                {consorcistas.map(cons => {
                    return (
                        <li 
                            key={cons.lote} 
                            className={styles.li}
                        >
                            <h4 className={styles.title}>
                                Lote {cons.lote}:
                            </h4>


                        {cons.info?.map(user => {
                            return (
                                <div
                                    className={styles.liUser}
                                >
                                    <p className={styles.text}>
                                        Nombre: {user.nombre}
                                    </p>
                                    <p className={styles.text}>
                                        Teléfono: {user.telefono}
                                    </p>
                                    <p className={styles.text}>
                                        Email: {user.email}
                                    </p>
                                </div>
                            )
                        })}
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default ElBosqueConsorcistasComp
