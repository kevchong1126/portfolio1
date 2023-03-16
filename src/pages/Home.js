import React from 'react'
import style from './Home.module.scss'
import Hero from '../components/home/Hero'
import Navbar from '../components/navbar/Navbar'
import MobileNavbar from '../components/navbar/MobileNavbar'

const Home = () => {
  return (
    <div className={style.container}>
        <div className={style.content}>
            <Navbar animate='0.6' exit='0.6' duration='0.3'/>
            <MobileNavbar />
            <Hero />
        </div>
    </div>
  )
}

export default Home