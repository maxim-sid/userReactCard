import React from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'
import {useState, useEffect, useMemo} from 'react';

function LoadUser(props){
    const {
        fullname,
        picture
    } = props;

    const [user, setUser] = useState([]);
    const [isFetch, setFetch] = useState(true);
    const [isChange, setIsChange] = useState(false);

    const wrapperClassName = classNames(styles.innerWrapper, {
        [styles.innerWrapperChange]: isChange,
    })

    const changeBtn = useMemo(() => <button onclick={() => setIsChange}/>)

    return (
        <div>
            
        </div>
    )
}

export default LoadUser;
