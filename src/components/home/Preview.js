import React, {useEffect, useState} from 'react'
import style from './Preview.module.scss'
import img1 from '../../img/laraya.jpg'
import img2 from '../../img/backstage.jpg'
import img3 from '../../img/bonsai.jpg'
import img4 from '../../img/instrument.jpg'
import img5 from '../../img/redsquare.jpg'
import { motion } from 'framer-motion'

const images = [img1, img2, img3, img4, img5];

const Preview = ({x, y}) => {
    const [ idx, setIdx ] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            if (idx >= 4) setIdx(0);
            else setIdx(prev => prev + 1)
        }, 200);

        return () => {
            clearInterval(id)
        }
    }, [idx])

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.3, delay:0.2}}} exit={{opacity:0, transition:{duration:0.2}}} className={style.container} style={{left:`${x+50}px`, top:`${50+(y%100)}px`}}>
        <div className={style.imgWrapper}>
            <img src={images[idx]} alt='project' />
        </div>
    </motion.div>
  )
}

export default Preview