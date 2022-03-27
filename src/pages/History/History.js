import React from 'react';
import styles from './History.module.css';

// Import Components
import Card from '../../components/Card/Card';

const History = (props) => {
    const { spacex } = props;
    return (
        <div className={styles.history}>
            {spacex.map((item) => {
                return (
                    <section key={item.title}>
                        <Card>
                            <h2>{item.title}</h2>
                            <img src={item.links.mission_patch_small} alt='' />
                            <p><span>Launch Number: </span>{item.flight_number}</p>
                            <p><span>Launch Year: </span>{item.static_fire_date_utc}</p>
                            <p><span>Details{item.details}</span></p>
                        </Card>
                    </section>
                )
            })}
        </div>
    );
}

export default History;