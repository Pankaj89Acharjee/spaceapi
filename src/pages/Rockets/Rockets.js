import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Rockets.module.css';

// Import Components
import Card from '../../components/Card/Card';
import Loading from '../../components/LoadingBox/Loading';

const Rockets = (props) => {
    const [loading, setLoading] = useState(true);
    const [rockets, setRockets] = useState([]);

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            clearTimeout(loadingTimer);

            axios.get('https://api.spacexdata.com/v3/rockets').then((response) => {
                setRockets(response.data);
                setLoading(false);
                });
            }, 1000);
        }, []);
    
    return (
        <div className={styles.rockets}>
            {loading ? (
                <Loading />
            ) : (
                <React.Fragment>
                    {rockets.map((item) => {
                        return (
                            <section className="head" key={item.id}/*Matching unique ids*/>
                                <Link to={`/rockets/${item.rocket_id}`} /*Redirecting to the RocketDetails page with sepecific matched Ids*/>
                                    <Card>
                                        <img src={item.flickr_images} alt="img" />
                                        <h2>{item.rocket_name}</h2>
                                        <p><span>Company Name: </span>{item.company}</p>
                                        <p>{item.description}</p>
                                    </Card>
                                </Link>
                            </section>
                        )
                    })}
                </React.Fragment>
            )}
        </div>
    );
}

export default Rockets;