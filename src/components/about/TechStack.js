import React, {useEffect, useRef} from 'react'
import style from './TechStack.module.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const transition = useRef();
  const title = useRef();
  const skills = useRef([]);
  const contact = useRef();
  const links = useRef([]);

  useEffect(() => {
    gsap.from(transition.current, {
      clipPath: 'circle(0% at 50% 0%)',
      scrollTrigger: {
        trigger: transition.current,
        start: 'top center',
        end: 'bottom bottom',
        scrub: 2
      }
    });

    gsap.from([title.current, contact.current], {
      opacity: 0,
      scrollTrigger: {
        trigger: transition.current,
        start: 'top 10%',
        end: 'bottom bottom',
        scrub: 2
      }
    });

    gsap.from(skills.current, {
      opacity: 0,
      x: '-20',
      stagger: 0.5,
      scrollTrigger: {
        trigger: transition.current,
        start: 'top 5%',
        end: 'bottom bottom',
        scrub: 2
      }
    })
    
    gsap.from(links.current, {
      opacity: 0,
      x: '-20',
      stagger: 0.5,
      scrollTrigger: {
        trigger: transition.current,
        start: 'top 5%',
        end: 'bottom 100%',
        scrub: 2
      }
    });

  }, []);

  
  return (
    <div className={style.container}>
        <div className={style.transition} ref={transition}></div>
        <div className={style.content}>
          <div className={style.skillContainer}>
            <h3 ref={title}>My Tech Skills</h3>

            <ul className={style.list}>
              <li ref={el => skills.current.push(el)}>REACT</li>
              <li ref={el => skills.current.push(el)}>SASS</li>
              <li ref={el => skills.current.push(el)}>REDUX</li>
              <li ref={el => skills.current.push(el)}>GSAP</li>
              <li ref={el => skills.current.push(el)}>FRAMER MOTION</li>
              <li ref={el => skills.current.push(el)}>INTERSECTION OBSERVER</li>
            </ul>
          </div>

          <div className={style.contactContainer}>
            <h3 ref={contact}>Contact Me</h3>

            <div className={style.social}>
              <a href='https://github.com/kevchong1126' target='_blank' rel="noreferrer" ref={el => links.current.push(el)}><AiFillGithub className={style.icon} /></a>
              <a href='https://www.linkedin.com/in/kevin-chong-undefined-49478526a/' target='_blank' rel="noreferrer" ref={el => links.current.push(el)}><AiFillLinkedin className={style.icon} /></a>
              <a href="mailto: kechng123x@gmail.com" ref={el => links.current.push(el)} className={style.email}>kechng123x@gmail.com</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TechStack