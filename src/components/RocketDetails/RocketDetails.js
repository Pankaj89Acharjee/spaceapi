import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './RocketDetails.module.css';
import Card from '../../components/Card/Card';
import Loading from '../../components/LoadingBox/Loading';

const RocketDetails = (props) => {
  const [loading, setLoading] = useState(true);
  const [rocket, setRocket] = useState({})

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
          clearTimeout(loadingTimer);
          const id = props.match.params.rocketId;
          const url = `https://api.spacexdata.com/v3/rockets/${id}`;
          
          axios.get(url)
          .then((response) => {
            setRocket(response.data);
            setLoading(false);
          });
        }, 1500);

      }, [props.match.params.rocketId]);/*Passing Id*/

      return (
        <div className={styles.rocket}>
            {loading ? (
              <Loading />
            ) : (
              <section>
                 <Card>
                    <h2>{rocket.rocket_name}</h2>
                    <p><span>Rocket Type: </span>{rocket.rocket_type}</p>
                    <p><span>Launch Date: </span>{rocket.first_flight}</p>                    
                    <p><span>Success Rate: </span>{rocket.success_rate_pct}</p>
                    <p><span>Launched: </span>{rocket.first_flight}</p>
                    <p><span>Payloads: </span>{rocket.payloads}</p>
                    <p>{rocket.description}</p>
                    <a href = {rocket.wikipedia}>Wiki Link</a> <br />
                    <Link to="/rockets">Previous Page</Link>
              </Card>
              </section>
            )}          
        </div>
    );
}

export default RocketDetails;
