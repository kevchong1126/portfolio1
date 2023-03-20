import React, { useState } from 'react'
import style from './List.module.scss'
import useMousePosition from '../../customHooks/useMousePosition'
import img1 from '../../img/laraya.jpg'
import img2 from '../../img/backstage.jpg'
import img3 from '../../img/bonsai.jpg'
import img4 from '../../img/instrument.jpg'
import img5 from '../../img/redsquare.jpg'

import { motion } from 'framer-motion'

const descriptions = [
    'Custom built ecommerce focused on car parts. Contains search, filter, state management and routing functionalities. Built with React, Redux, and several other 3rd library packages',
    'Website clone. Includes background color change depending on current scroll and a snapping scroll. Built with plain JS, HTML and CSS',
    'Website clone. Bonsai is a finance management company; its layout contains a multi level dropdown list and an accordion container',
    'Website clone. Website with really cool design. Its animations were recreated with help of Intersection Observer.',
    'Website clone. It has an interval that changes the source of an image. It also uses different libraries for other functionalities'
]

const images = [img1, img2, img3, img4, img5];

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
const List = () => {
    const [ currImg, setCurrImg ] = useState(-1);
    const {x, y} = useMousePosition();
    const mouseLeaveHandler = () => setCurrImg(-1)
    
  return (
    <div className={style.container}>
        <div className={style.content}>

            <motion.ul className={style.list} variants={framer} initial='initial' animate='animate' exit='exit'>
                <li className={style.project} onMouseLeave={mouseLeaveHandler} onMouseEnter={el => setCurrImg(0)}>
                <a href='https://kevchong1126.github.io/laraya/' target='_blank' rel="noreferrer"><h3>LA RAYA -></h3></a>
                    <div className={style.mobilePreview}>
                        <img src={img1} alt='Raya' />
                        <p>
                            {
                                descriptions[0]
                            } 
                        </p>
                    </div>
                </li>
                <li className={style.project} onMouseLeave={mouseLeaveHandler} onMouseEnter={el => setCurrImg(1)}>
                <a href='https://kevchong1126.github.io/backstage/' target='_blank' rel="noreferrer"><h3>BACKSTAGE -></h3></a>
                    <div className={style.mobilePreview}>
                        <img src={img2} alt='Backstage' />
                        <p>
                            {
                                descriptions[1]
                            } 
                        </p>
                    </div>
                </li>
                <li className={style.project} onMouseLeave={mouseLeaveHandler} onMouseEnter={el => setCurrImg(2)}>
                    <a href='https://kevchong1126.github.io/bonsai/' target='_blank' rel="noreferrer"><h3>BONSAI -></h3></a>
                    <div className={style.mobilePreview}>
                        <img src={img3} alt='Bonsai' /> 
                        <p>
                            {
                                descriptions[2]
                            } 
                        </p>
                    </div>
                </li>
                <li className={style.project} onMouseLeave={mouseLeaveHandler} onMouseEnter={el => setCurrImg(3)}>
                <a href='https://kevchong1126.github.io/instrument/' target='_blank' rel="noreferrer"><h3>INSTRUMENT -></h3></a> 
                    <div className={style.mobilePreview}>
                        <img src={img4} alt='Instrument' />
                        <p>
                            {
                                descriptions[3]
                            } 
                        </p>
                    </div>
                </li>
                <li className={style.project} onMouseLeave={mouseLeaveHandler} onMouseEnter={el => setCurrImg(4)}>
                <a href='https://kevchong1126.github.io/redsquare/' target='_blank' rel="noreferrer"><h3>REDSQUARE -></h3></a>
                    <div className={style.mobilePreview}>
                        <img src={img5} alt='Redsquare' />
                        <p>
                            {
                                descriptions[4]
                            } 
                        </p>
                    </div>
                </li>
            </motion.ul>

            <div className={style.previewContainer} style={{left: `${x+100}px`, top:`${y-300}px`}}>
                {
                    images[currImg] && 
                    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5, delay:0.2}}} exit={{opacity:1, transition:{duration:0.1}}} >
                        <img src={images[currImg]} alt='sda'></img>
                        <div className={style.desc}>
                            {
                            descriptions[currImg]
                            }
                        </div>
                    </motion.div>
                }
            </div>

        </div>
    </div>
  )
}

export default List