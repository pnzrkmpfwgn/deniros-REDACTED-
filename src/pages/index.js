import { AnimatePresence, motion } from 'framer-motion'
import {useEffect, useState} from 'react';
import classes from '../styles/Home.module.css';

const images = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
]

const variants = {
  initial: ()=> {
    return {
      opacity: 0,
      //scale: 0.5,
    }
  },
  animate: {
    opacity:[0,0,0,0,1,1],
    //scale: 1,
    transition: 'ease-in',
    transition: {
      opacity: { duration: 1.5,},
    },
  },
  exit: () => {
    return {
      opacity: [1,1,1,1,1,0],
      //scale: 0.5,
       transition: 'ease-in',
      transition: {
        opacity: { duration: 1.5, },
      },
    }
  },
}

export default function Home() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)


  // function prevStep() {
  //   setDirection(-1)
  //   if (index === 0) {
  //     setIndex(images.length - 1)
  //     return
  //   }
  //   setIndex(index - 1)
  // }

  useEffect(()=>{
   const myInterval= setInterval(()=>nextStep(),5000);
   function nextStep() {
    setDirection(1)
    if (index === images.length - 1) {
      setIndex(0)
      return
    }
    setIndex(index + 1)
  }
    return ()=>{
      clearInterval(myInterval);
    }
  },[index])

  return (
    <>
     <div>
     <AnimatePresence initial={false} custom={direction}>
          <motion.img
            variants={variants}
            animate='animate'
            initial='initial'
            exit='exit'
            src={images[index]}
            alt='slides'
            className={classes.slides}
            key={images[index]}
            custom={direction}
          />
        </AnimatePresence>
        <div className={classes.landing}>
            <h1 className={classes.landing} > Lorem Ipsum Dolor Sit Amet </h1>
            <div>
            <button className={classes.landing} >Menu</button>
            <button className={classes.landing} > About Us </button>
            </div>
          </div>
      </div>
    </>
  )
}
