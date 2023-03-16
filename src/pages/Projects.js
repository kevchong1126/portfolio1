import React from 'react'
import MobileNavbar from '../components/navbar/MobileNavbar'
import Navbar from '../components/navbar/Navbar'
import List from '../components/projects/List'
import style from './Projects.module.scss'
import { motion } from 'framer-motion'
const animation = {
  initial: {
    left: '-100%',
  },
  animate: {
    left: 0,
    transition:{
      duration: 0.8
    }
  },
  exit: {
    left: '100%',
    transition: {
      delay: 1,
      duration: 0.8
    }
  }
}
const Projects = () => {
  return (
    <div className={style.container}>
        
        <motion.div className={style.transition} variants={animation} initial='initial' animate='animate' exit='exit'></motion.div>
        <div className={style.content}>
            <MobileNavbar />
            <Navbar color='white' animate='1' exit='0.5' duration='0.3'/>
            <List />
        </div>
    </div>
  )
}

export default Projects