import React, { useState } from 'react'
import styles from './Hero.module.scss'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import useMousePosition from '../../customHooks/useMousePosition'
import Preview from './Preview'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [showImg, setShowImg] = useState(false);
  const {x, y} = useMousePosition();
  const delay1 = 0.3;
  const delay2 = 0.6;

  const animation1 = {
    initial: {
      y: 100,
    },
    animate: {
      y: 0,
      transition: {
        ease: 'linear',
        duration: 0.5,
      }
    },
    exit:{
      y:-100,
      opacity: 0,
      transition: {
        ease: 'linear',
        duration: 0.5,
      }
    },
  };
  
  const animation2 ={
    initial:{
      y:100,
      
    },
    animate:{
      y:0,
      transition: {
        duration: 0.5,
        delay: delay1
      }
    },
    exit:{
      y:-100,
      opacity:0,
      transition:{
        delay: delay1,
        duration: 0.5,
      }
    }
  };
  
  const animation3 ={
    initial:{
      x:100,
      opacity:0,
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration: 0.5,
        delay: delay2
      }
    },
    exit:{
      x:-100,
      opacity:0,
      transition: {
        delay: delay2,
        duration: 0.5,
      }
    }
  };

  return (
    <div className={styles.container}>
        <div className={styles.content}> 
            <div className={styles.nameContainer}>
                <motion.div className={styles.name} variants={animation1} initial='initial' animate='animate' exit='exit' >KEVIN</motion.div>
                <motion.div className={styles.name} variants={animation2} initial='initial' animate='animate' exit='exit'  >CHONG.</motion.div>
            </div>
            
            <div className={styles.viewProjects} onMouseEnter={el => setShowImg(true)} onMouseLeave={el => setShowImg(false)} >
              <motion.div className={styles.linkWrapper} variants={animation3} initial='initial' animate='animate' exit='exit' ><Link className={styles.link}to='/work' >View my Projects <span>-></span></Link></motion.div>
            </div>
            {
              showImg &&
              <Preview x={x} y={y}/>
            }
            <div className={styles.developerContainer}>
                <motion.div className={styles.developer} variants={animation1} initial='initial' animate='animate' exit='exit' >FRONTEND</motion.div>
                <motion.div className={styles.developer} variants={animation2} initial='initial' animate='animate' exit='exit' >DEVELOPER.</motion.div>
            </div>

            <ul className={styles.socialMedia}>
              <motion.li variants={animation3} initial='initial' animate='animate' exit='exit'  ><a href='https://github.com/kevchong1126' target='_blank' rel="noreferrer"><AiFillGithub className={styles.icon}/></a></motion.li>
              <motion.li variants={animation3} initial='initial' animate='animate' exit='exit'  ><a href='https://www.linkedin.com/in/kevin-chong-ng-49478526a/' target='_blank' rel="noreferrer"><AiFillLinkedin className={styles.icon}/></a></motion.li>
            </ul>
        </div>

    </div>
  )
}

export default Hero