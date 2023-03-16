import React from 'react'
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = ({color, letter, animate=0, exit=0, duration=0}) => {
  const animation ={
    initial:{
      y:50,
    },
    animate:{
      y:0,
      transition:{
        delay: animate,
        duration: duration
      }
    },
    exit:{
      y:-50,
      opacity:0,
      transition: {
        delay: exit,
        duration: duration
      }
    }
  }
  return (
    <div className={styles.container}>
        <motion.ul className={styles.content} variants={animation} initial='initial' animate='animate' exit='exit'>
            <div className={styles.linkContainer}>
                <Link to='/portfolio'><li className={styles.link} style={{backgroundColor:color || '#f0a050', color:letter || '#000'}}>HOME</li></Link>
                </div>
            <div className={styles.linkContainer}>
                <Link to='/work'><li className={styles.link} style={{backgroundColor:color || '#f0a050', color:letter || '#000'}}>PROJECTS</li></Link>
            </div>
            <div className={styles.linkContainer}>
                <Link to='/me'><li className={styles.link} style={{backgroundColor:color || '#f0a050', color:letter || '#000'}}>ME</li></Link>
            </div>
            
        </motion.ul>
    </div>
  )
}

export default Navbar