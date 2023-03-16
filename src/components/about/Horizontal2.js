import React, { useEffect, useRef } from 'react'
import style from './Horizontal2.module.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Horizontal2 = () => {
  const years = useRef();
  const title = useRef();
  const text = useRef();
  const container = useRef();

  useEffect(() => {
    gsap.to(years.current, {
      translateY: '-50%',
      scrollTrigger: {
        trigger: years.current,
        start: '40% center',
        end: 'bottom top',
        scrub: 10
      }

    })

  }, []);

  return (
    <div className={`${style.container} panel`}>
      <div className={style.content}>
        <div className={style.banner} ref={years}>
            <span>2020</span>
            <span>2020</span>
            <span>2020</span>
            <span>2020</span>
            <span>2020</span>
            <span>2020</span>
            <span>2020</span>
            <span>2020</span>
            <span>2020</span>
            <span>2020</span>
            <span>2020</span>
            <span>2020</span>
            <span>2020</span>
            <span>2020</span>
            <span>2020</span>
            <span>2020</span>
            <span>2020</span>
            <span>2020</span>
            <span>2020</span>
            <span>2020</span>
        </div>

        <div className={style.textContainer} ref={container}>
            <h2 className={style.header} ref={title}>It Was 2020</h2>
            <p className={style.text} ref={text}>
                And I Had To Choose A Career In College
            </p>
        </div>
      </div>
        
    </div>
  )
}

export default Horizontal2