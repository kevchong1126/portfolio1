import React from 'react'
import style from './About.module.scss'
import Navbar from '../components/navbar/Navbar'
import MobileNavbar from '../components/navbar/MobileNavbar'
import Container1 from '../components/about/Container1'
import Container2 from '../components/about/Container2'
import Container3 from '../components/about/Container3'
import TechStack from '../components/about/TechStack'
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

const About = () => {
  return (
    <div className={style.container}>
      <motion.div className={style.transition} variants={animation} initial='initial' animate='animate' exit='exit' />
      
      <div className={style.content}>
          <Navbar color='lightGray' animate='1' exit='0.4' duration='0.3'/>
          <MobileNavbar />
          <Container1 />
          <Container2 />
          <Container3 />
          <TechStack />
      </div>
    </div>
  )
}

export default About