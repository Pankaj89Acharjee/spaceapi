import React, {useState} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from './Navbar.css'

 const Navbar = () => {
     window.addEventListener('scroll', function() {
         const header = document.querySelector(".header")
         header.classList.toggle("active", window.scrollY > 100)
     }) /*Permanently to stay active of the navbar*/

     const[mobile, setMobile] = useState(false);

  return (
    <header className={styles.header}>
    <h1>
        <Link to='/'>
            SPACEX API
        </Link>
        
    </h1>
    <nav>
        <ul className={mobile ? 'nav-links mobile' : 'link f_flex uppercase'}
            onClick = {() => setMobile(false)}>
            <li>
                <Link to="/">Launches</Link>
            </li>
            <li>
                <Link to="/rockets">Rockets</Link>
            </li>
            <li>
                <Link to="/upcoming">Upcoming/Past Launches</Link>
            </li>
          
        </ul>
    </nav>
</header>
);
  
}

export default Navbar

