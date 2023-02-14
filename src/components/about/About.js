import Image from 'next/image';
import classes from './About.module.css';
import classes_2 from '../../components/buttons/regular_button/Regular_button.module.css';
import { useOnScreen } from '@/utils/hooks';
import { AnimatePresence,motion,useAnimationControls } from 'framer-motion';
import {useEffect} from 'react';
import Link from 'next/link';

const About = () => {
    const [ref_1, visibleSection_1] = useOnScreen({ rootMargin: '-100px' })
    const [ref_2, visibleSection_2] = useOnScreen({ rootMargin: '-200px' })
    const [ref_3, visibleSection_3] = useOnScreen({ rootMargin: '-300px' })
    const animation_1 = useAnimationControls();
    const animation_2 = useAnimationControls();
    const animation_3 = useAnimationControls();
    const animation_4 = useAnimationControls();
    const animation_5 = useAnimationControls();
    const animation_6 = useAnimationControls();

    useEffect(() => {
        if (visibleSection_1) {
          animation_1.start({opacity:1,translateX:0,skewX:-20});
          animation_2.start({opacity:1,translateX:0,skew:15});
        }
        if(visibleSection_2){
            animation_3.start({opacity:1,translateX:0,skewX:10});
            animation_4.start({opacity:1,translateX:0,skew:-15});
        }
        if(visibleSection_3){
            animation_5.start({opacity:1,translateX:0,skewX:-20});
            animation_6.start({opacity:1,translateX:0,skew:15});
        }  
      }, [animation_1,animation_2, animation_3,animation_4,animation_5,animation_6, visibleSection_1,visibleSection_2,visibleSection_3]);

    return <>
        <div ref={ref_1} className={classes.about_container} >
            <AnimatePresence>
            <motion.div
                key={1}
                initial={{opacity:0,translateX:-1200,skewX:0}}
                animate={animation_1}
                transition={{duration:0.6,type: "spring", stiffness: 100}}>
                    <Image className={classes.rounded_image} src={"/images/4.jpg"} alt="" width={500} height={500} />
            </motion.div>
            <motion.div 
                key={2}
                initial={{opacity:0,translateX:800 ,skewX:0}}
                animate={animation_2}
                transition={{delay:0.4,duration:0.6,type: "spring", stiffness: 100}}
                className={classes.text_container} >
                <h2 className={classes.heading} >Who Are We?</h2>
                <p className={classes.paragraph} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quibusdam velit fugit magnam magni ad, perspiciatis nobis, itaque quae commodi beatae mollitia rem dolores fugiat aliquam quo ut! Sunt, dolorem?</p>
            </motion.div>
            </AnimatePresence>
        </div>
        <div ref={ref_2} className={classes.about_container + " " + classes.section_2}>
        <AnimatePresence>
        <motion.div 
                key={3}
                initial={{opacity:0,translateX:800 ,skewX:0}}
                animate={animation_4}
                transition={{delay:0.4,duration:0.6,type: "spring", stiffness: 100}}
                className={classes.text_container + " " + classes.section_2_text_container} >
                <h2 className={classes.heading} >What Are We?</h2>
                <p className={classes.paragraph} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quibusdam velit fugit magnam magni ad, perspiciatis nobis, itaque quae commodi beatae mollitia rem dolores fugiat aliquam quo ut! Sunt, dolorem?</p>
            </motion.div>
        <motion.div
                key={4}
                initial={{opacity:0,translateX:-1200,skewX:0}}
                animate={animation_3}
                transition={{duration:0.6,type: "spring", stiffness: 100}}
                >
                    <Image className={classes.rounded_image_2} src={"/images/5.jpg"} alt="" width={400} height={300} />
            </motion.div>
        </AnimatePresence>
        </div>
        <div ref={ref_3} className={classes.about_container}>
            <AnimatePresence>
            <motion.div
                key={5}
                initial={{opacity:0,translateX:-1200,skewX:0}}
                animate={animation_5}
                transition={{duration:0.6,type: "spring", stiffness: 100}}
                className={classes.map + " " + classes.rounded_image}
                >
                    <iframe width={600} height={400} frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    <div className={classes_2.button + " " + classes_2.button_} id="button-5">
                    <div className={classes_2.translate}></div>
                    <a href="https://www.google.com/maps/@35.2051166,33.3822757,15z" className={classes.link} > Konum </a>
                </div>
            </motion.div>

            <motion.div 
                key={6}
                initial={{opacity:0,translateX:800 ,skewX:0}}
                animate={animation_6}
                transition={{delay:0.4,duration:0.6,type: "spring", stiffness: 100}}
                className={classes.text_container + " " + classes.text_container} >
                <h2 className={classes.heading} >Where Are We?</h2>
                <p className={classes.paragraph} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quibusdam velit fugit magnam magni ad, perspiciatis nobis, itaque quae commodi beatae mollitia rem dolores fugiat aliquam quo ut! Sunt, dolorem?</p>
                <div className={classes_2.button + " " + classes_2.button_} id="button-5">
                    <div className={classes_2.translate}></div>
                    <a href="https://www.google.com/maps/@35.2051166,33.3822757,15z" style={{color:"rgb(71, 71, 71)"}} className={classes.link} > Menu </a>
                </div>
            </motion.div>
            </AnimatePresence>
        </div>
    </>
} 

export default About;