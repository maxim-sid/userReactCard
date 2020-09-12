import React, {useState, useEffect, useMemo} from 'react'
import PropTypes from 'prop-types'
import styles from './UserCard.module.scss'

export default function UserCardLoad(props) {
    const {
        src,
        name: {title, first, last},
        name,
    } = props;
    const [isLoaded, setIsLoaded] = useState(false);
    const [image, setImage] = useState(new Image())

    useEffect(() => {
        const handleLoad = () => setIsLoaded(true);
        image.addEventListener('load', handleLoad);
        return () => {
            image.removeEventListener('load', handleLoad);
        }
    }, [image])

    useEffect(() => {
        setIsLoaded(false);
        image.src = src;
    }, [src])

    return (
        <div className={styles.imageWrapper}>
            {isLoaded ?( 
            <img src = {src} alt = {`${first}` `${last}`}/>    
            )
            :     (<span className={styles.initials}>{first[0] ?? ''} {last[0] ?? ''}</span>)
        }
        </div>
    )
}
