import styles from './_InqSinglComp.module.scss'

const InqSingleComp = (props: any) => {

    // console.log('props in single: ', props)
    return (
        <div
            className={styles.container}
        >
            <p>
                {props.article}
            </p>
            <p>
                {props.group1}
            </p>
            <p>
                {props.group2}
            </p>
            <p>
                {props.brand}
            </p>
            <p>
                {props.location}
            </p>
            <p>
                {props.quantity}
            </p>

        </div>
    )
}

export default InqSingleComp
