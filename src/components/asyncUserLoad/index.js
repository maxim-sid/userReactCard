import React, { useState, useEffect } from 'react'
import styles from '../NewUserCard/index.module.scss';

export default function UserCardPractice() {
    const [users, setUsers] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    
    useEffect(() => {
        fetchUsers();
    })

    async function fetchUsers() {
        fetch("../front_practice/index.json")
        .then(response => response.json())
        .then(response => {
            console.log(response);
            setUsers(response);
            setIsFetching(false);
        })
        .catch(console.error)
    }

        if(!isFetching){
        const userCard = users.map(item => {
            return(
                <>
                <div className={styles.header}></div>
                <div className={styles.avatar_container}>
                    <img className={styles.image_container} alt={'Avatar'} src={item.imageSrc}></img>
                </div>
                <div className={styles.info_container}>
                    <div className={styles.name_container}>
                        <h1>{item.name}</h1>
                        <h2>{item.last}</h2>
                    </div>
                    <div className={styles.description}>
                       <p> sodales accumsan ligula. Aenean sed diam tristique, fermentum mi nec, ornare arcu</p>
                    </div>
                </div>
                </>
            )
        });
        return (
            <div className={styles.user_container}>
                {userCard}
            </div>
        )
    }
}
