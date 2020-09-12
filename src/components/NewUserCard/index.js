import React from 'react'
import styles from './index.module.scss'

const user = {
    'fullName': '',
}

export default function NewUserCard() {
    return (
            <div className={styles.user_container}>
                <div className={styles.header}></div>
                <div className={styles.avatar_container}>
                    <img className={styles.image_container} alt={'Avatar'} src={'https://image.freepik.com/free-photo/surprised-happy-girl-pointing-left-recommend-product-advertisement-make-okay-gesture_176420-20190.jpg'}></img>
                </div>
                <div className={styles.info_container}>
                    <div className={styles.name_container}>
                        <h1>Alaina Wick</h1>
                        <h2>Front-end Dev</h2>
                    </div>
                    <div className={styles.description}>
                       <p> sodales accumsan ligula. Aenean sed diam tristique, fermentum mi nec, ornare arcu</p>
                    </div>
                </div>
            </div>
    )
}
