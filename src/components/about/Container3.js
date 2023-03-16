import React, {useEffect, useRef} from 'react'
import style from './Container3.module.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Container3 = () => {
    const containers = useRef([]);

    useEffect(() => {
        containers.current.forEach( el => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    end: 'top 10%',
                    scrub: 3
                }
            })

            tl.from(el, {opacity: 0, y: '70'});
            tl.to(el, {opacity: 0})
        })
    }, [])
  return (
    <div className={style.container}>
        <div className={style.content}>
            <div className={style.text} ref={el => containers.current.push(el)}>
                <p className={style.desc}>I was confused and had no idea what to do in life</p>
            </div>
            <div className={style.textRight} ref={el => containers.current.push(el)}>
                <p className={style.desc}>I thought I wanted to be a civil engineer</p>
            </div>
            <div className={style.text} ref={el => containers.current.push(el)}>
                <p className={style.desc}>But then, COVID put us in lockdown,</p>
            </div>
            <div className={style.textRight} ref={el => containers.current.push(el)}>
                <p className={style.desc}>Which left me even more confused...</p>
            </div>
            <div className={style.text} ref={el => containers.current.push(el)}> 
                <p className={style.desc}>So, I Somehow stumbled upon programming</p>
            </div>
            <div className={style.textRight} ref={el => containers.current.push(el)}>
                <p className={style.desc}>I started coding for fun and enjoyed it a lot.</p>
            </div>
            <div className={style.text} ref={el => containers.current.push(el)}>
                <p className={style.desc}>And ever since, I have fallen in love with programming.</p>
            </div>
        </div>
    </div>
  )
}

export default Container3