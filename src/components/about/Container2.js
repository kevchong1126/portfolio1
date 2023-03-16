import React, {useRef, useEffect} from 'react'
import style from './Container2.module.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import Horizontal1 from './Horizontal1';
import Horizontal2 from './Horizontal2';
gsap.registerPlugin(ScrollTrigger);


const Container2 = () => {
    const container = useRef(null);

    useEffect(() => {
      const panels = gsap.utils.toArray(".panel");
      gsap.to(panels,{
        xPercent:  -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          scrub: 1,
          pin:true,
          end: () => "+=" + container.current.offsetWidth
        }
      });

      return () => {
          let triggers = ScrollTrigger.getAll();
          triggers.forEach( trigger => {			
          trigger.kill();
        });
      }
    }, []);

  return (
    <div className={style.container} ref={container}>
          <Horizontal1 />
          <Horizontal2 />
    </div>
  )
}

export default Container2