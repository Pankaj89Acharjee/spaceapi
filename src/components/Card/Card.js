import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
    const { children } = props; /*Setting props for all children*/
    return (
        <div className={styles.card}>
            {children}
        </div>
    );
};


export default Card;