import React, { useEffect, useRef} from 'react'
import style from './Container1.module.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import { motion } from 'framer-motion';
gsap.registerPlugin(ScrollTrigger);

const animProperty = {
  opacity: 0,
  scale: 0.8,
  y: 50,
  duration: 0.5
}
const textTrigger = {
  start: 'top 60%',
  end: 'bottom 40%',
  scrub: 1
}
const framer = {
  initial: {
    y:70, 
    opacity: 0,
    
  },
  animate: {
    y:0, 
    opacity:1,
    transition: {
      delay: 0.7,
      duration: 0.3
    }
  },
  exit: {
    y:-70, 
    opacity: 0,
    transition: {
      delay: 0.2,
      duration: 0.3
    }
  }
}
const Container1 = () => {
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);

  const desc1 = useRef(null);
  const desc2 = useRef(null);
  const desc3 = useRef(null);

  const cont = useRef(null)
  useEffect(() => {

    gsap.from(text2.current, {...animProperty, 
      scrollTrigger: {
        trigger: text2.current,
        ...textTrigger
      }}
    )
    gsap.from(text3.current, {...animProperty, 
      scrollTrigger: {
        trigger: text3.current,
        ...textTrigger
      }}
    )
    gsap.to(cont.current, {
      scrollTrigger: {
        trigger: cont.current,
        start: 'center center',
        end: '+=1500px',
        pin: true,
        pinSpacing: true
      }
    })
    gsap.to(desc1.current, {
      x: '-80%',
      scrollTrigger: {
        trigger: cont.current,
        start: 'center center',
        end: '+=1500px',
        scrub: 3
      }
    })
    gsap.to(desc2.current, {
      x: '50%',
      scrollTrigger: {
        trigger: cont.current,
        start: 'center center',
        end: '+=1500px',
        scrub: 3
      }
    })
    gsap.to(desc3.current, {
      x: '-60%',
      duration:10,
      scrollTrigger: {
        trigger: cont.current,
        start: 'center center',
        end: '+=1500px',
        scrub: 3
      }
    })

      return () => {
        let triggers = ScrollTrigger.getAll();
        triggers.forEach( trigger => {			
        trigger.kill();
      });
    }
  }, []);

 
  return (
    <div className={style.container}>
        <motion.div className={style.text} ref={text1} variants={framer} initial='initial' animate='animate' exit='exit' > Hi There! My Name Is Kevin Chong,</motion.div>
        <div className={style.text} ref={text2}>And I Am A Self Taught Web Developer.</div>
        <div className={style.text} ref={text3}> But I Also Am...</div>
        
        <div className={style.wordsContainer} ref={cont}>
            <div className={style.wordRight} ref={desc1}>A PROBLEM SOLVER</div>
            <div className={style.wordLeft} ref={desc2}>COMPETITIVE</div>
            <div className={style.wordRight1} ref={desc3}>AN OVERACHIEVER</div>
        </div>
        
    </div>
  )
}

export default Container1