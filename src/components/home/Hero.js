import React, { useState } from 'react'
import styles from './Hero.module.scss'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import useMousePosition from '../../customHooks/useMousePosition'
import Preview from './Preview'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const animation1 = {
  initial: {
    y: 100,
    transition: {
      ease: 'linear',
      duration:3
    }
  },
  animate: {
    y: 0,
    transition: {
      ease: 'linear'
    }
  },
  exit:{
    y:-100,
    opacity: 0,
    transition: {
      ease: 'linear'
    }
  },
}

const animation2 ={
  initial:{
    y:100,
    transition:{
      duration: 3
    }
  },
  animate:{
    y:0,

  },
  exit:{
    y:-100,
    opacity:0,
  }
}

const animation3 ={
  initial:{
    x:100,
    opacity:0,
    transition:{
      duration: 3
    }
  },
  animate:{
    x:0,
    opacity:1
  },
  exit:{
    x:-100,
    opacity:0,
  }
}
const Hero = () => {
  const [showImg, setShowImg] = useState(false);
  const {x, y} = useMousePosition();
  const delay1 = 0.3;
  const delay2 = 0.6;
  return (
    <div className={styles.container}>
        <div className={styles.content}> 
            <div className={styles.nameContainer}>
                <motion.div className={styles.name} variants={animation1} initial='initial' animate='animate' exit='exit' >KEVIN</motion.div>
                <motion.div className={styles.name} variants={animation2} initial='initial' animate='animate' exit='exit' transition={{delay:delay1, ease:'linear'}}>CHONG.</motion.div>
            </div>
            
            <div className={styles.viewProjects} onMouseEnter={el => setShowImg(true)} onMouseLeave={el => setShowImg(false)} >
              <motion.div className={styles.linkWrapper} variants={animation2} initial='initial' animate='animate' exit='exit'  transition={{delay:delay2, ease:'linear'}}><Link className={styles.link}to='/work' >View my Projects <span>-></span></Link></motion.div>
            </div>
            {
              showImg &&
              <Preview x={x} y={y}/>
            }
            <div className={styles.developerContainer}>
                <motion.div className={styles.developer} variants={animation1} initial='initial' animate='animate' exit='exit' >FRONTEND</motion.div>
                <motion.div className={styles.developer} variants={animation2} initial='initial' animate='animate' exit='exit' transition={{delay:delay1, ease:'linear'}}>DEVELOPER.</motion.div>
            </div>

            <ul className={styles.socialMedia}>
              <motion.li variants={animation3} initial='initial' animate='animate' exit='exit'  transition={{delay:delay2, ease:'linear'}}><a href='https://github.com/kevchong1126' target='_blank' rel="noreferrer"><AiFillGithub className={styles.icon}/></a></motion.li>
              <motion.li variants={animation3} initial='initial' animate='animate' exit='exit'  transition={{delay:delay2, ease:'linear'}}><a href='https://www.linkedin.com/in/kevin-chong-undefined-49478526a/' target='_blank' rel="noreferrer"><AiFillLinkedin className={styles.icon}/></a></motion.li>
            </ul>
        </div>

    </div>
  )
}

export default Hero