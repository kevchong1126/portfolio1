import React, {useRef, useEffect} from 'react'
import style from './Horizontal1.module.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


import img1 from '../../img/story1.jpg'
import img2 from '../../img/story2.jpg'
import img3 from '../../img/story3.jpg'
import img4 from '../../img/story4.jpg'


gsap.registerPlugin(ScrollTrigger);
const Horizontal1 = () => {
  const section = useRef(null);
  const title = useRef(null);
  const images = useRef([]);

  useEffect(() => {
    gsap.from(section.current, {
      clipPath: 'circle(0% at 50% 0%)',
      scrollTrigger: {
        trigger: section.current,
        start: 'top 50%',
        end: 'bottom bottom',
        scrub: 4
      }
    });

    gsap.from(title.current, {
      opacity: 0,
      scale: 0.8,
      y: 60,
      duration: 0.5,
      scrollTrigger:{
        trigger: section.current,
        start: 'top top',
        end: 'top 55%',
        scrub: 1,
      }
    })

    images.current.forEach(el => {
      gsap.from(el, {
        opacity:0,
        scrollTrigger: {
          trigger: section.current,
          start: 'top 30%',
          end: 'bottom bottom',
          scrub: 1
        }
      });

      gsap.to(el, {
        scale: 0.85,
        scrollTrigger:{
          trigger: el,
          start: 'right 50%',
          scrub: 1
        }
      })
    })
  },[])

  return (
    <div className={`${style.container} panel`} ref={section}>
      <div className={style.content}>
        <h1 ref={title}>This Is My Story </h1>
        <img className={style.img1} src={img1} ref={el => images.current.push(el)}alt='Einstein'></img>
        <img className={style.img2} src={img2} ref={el => images.current.push(el)}alt='War'></img>
        <img className={style.img3} src={img3} ref={el => images.current.push(el)}alt='Big Bang'></img>
        <img className={style.img4} src={img4} ref={el => images.current.push(el)}alt='Bomb'></img>
      </div>
        
    </div>
  )
}

export default Horizontal1