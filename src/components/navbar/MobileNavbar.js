import React, { useState, useEffect } from 'react'
import styles from './MobileNavbar.module.scss'
import { Link } from 'react-router-dom'

const MobileNavbar = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const minWidth = window.matchMedia('(min-width: 480px)');

    useEffect( () => {
        const setFalse = () => {
            if (minWidth.matches){
                setIsOpen(false);
            }
        };

       window.addEventListener('resize', setFalse)
        
       return () => {window.removeEventListener('resize', setFalse)};

    }, [isOpen, minWidth]);
    
  return (
    <div className={styles.container}>
        <div className={`${styles.hamburger} ${isOpen ? styles.ahamburger : ''}`} onClick={e => setIsOpen(el => !el)}>
            <span className={styles.line}></span>
            <span className={styles.line1}></span>
        </div>

        <div className={`${styles.menu} ${isOpen ? styles.amenu : ''}`}>
            <ul className={styles.links}>
                <Link to='/'><li>HOME</li></Link>
                <Link to='/work'><li>PROJECTS</li></Link>
                <Link to='/me'><li>ME</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default MobileNavbar