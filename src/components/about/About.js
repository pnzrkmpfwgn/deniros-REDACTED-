import Image from 'next/image';
import classes from './About.module.css';
import { useOnScreen } from '@/utils/hooks';
import { AnimatePresence,motion } from 'framer-motion';

const About = () => {
    const [ref, visible] = useOnScreen({ rootMargin: '-300px' })
    return <>
        <div ref={ref} className={classes.about_container} >
                {
                    visible &&
            <AnimatePresence>
            <motion.div
                initial={{opacity:0,translateX:-1200,skewX:0}}
                animate={{opacity:1,translateX:0,skewX:-20}}
                transition={{duration:0.6,type: "spring", stiffness: 100}}>
                    <Image className={classes.rounded_image} src={"/images/4.jpg"} alt="" width={500} height={500} />
            </motion.div>
            <motion.div 
                initial={{opacity:0,translateX:800 ,skewX:0}}
                animate={{opacity:1,translateX:0,skew:15}}
                transition={{delay:0.4,duration:0.6,type: "spring", stiffness: 100}}
                className={classes.text_container} >
                <h2 className={classes.heading} >Who we Are?</h2>
                <p className={classes.paragraph} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quibusdam velit fugit magnam magni ad, perspiciatis nobis, itaque quae commodi beatae mollitia rem dolores fugiat aliquam quo ut! Sunt, dolorem?</p>
            </motion.div>
            </AnimatePresence>
                }    
            
           
        </div>
    </>
} 

export default About;