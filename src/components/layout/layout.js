import { useState,useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { IntlProvider,FormattedMessage } from "react-intl";
import LayoutContext from "./layoutContext";
import MenuOverlay from '../Menu/MenuOverlay';
import {message} from  '../../data/langData';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion"
import classes from './layout.module.css';

//Might be useful for later
//import { useOnScreen,useMediaQuery } from '../../utils/hooks';
//




export default function Layout({ children }) {
  
 // const [size, setSize] = useState();
  //const [ref, visible] = useOnScreen({ rootMargin: '-100px' })
  //const size = useMediaQuery(768)
  // useEffect(() => {
  //   setSize(document.body.clientWidth);
  // }, []);
  // useEffect(() => {
  //   const onResize = (e) => {
  //     setSize(e.target.outerWidth);
  //   };
  //   window.addEventListener("resize", onResize);
  //   return () => {
  //     window.removeEventListener("resize", onResize);
  //   };
  // }, []);
  const [loadingFinish,setLoadingFinish] = useState(true);
  const [locale, setLocale] = useState('en');
  const [navbarOpen,setNavbarOpen] = useState(false);
  const handleChange = (e) => {
    setLocale(e.target.value);
  };

  useEffect(()=>{
    const timer = setTimeout(()=> setLoadingFinish(false), 2000);
    return ()=> clearTimeout(timer);
  },[]);

  return (
    <>
       <LayoutContext.Provider value={{locale}} >
       <AnimatePresence>
        {
          loadingFinish && <motion.div className={classes.page_loading} 
          initial={{opacity:1}} 
          animate={{opacity:1}}
          transition={{delay:0.5}}
          exit={{opacity:0}}
          >
          <motion.div
           initial={{opacity:1,scale:0}}
           animate={{scale:1}}
           exit={{translateX:500,opacity:0}}
           transition={{duration:0.3,type: "spring", stiffness: 100}}
           style={{'marginBottom':'25px'}}>
            <Image src="/images/Logos/Logo_Star.png" width={300} height={300} alt=""></Image>
            </motion.div>
            <motion.div
           initial={{opacity:1,scale:0}}
           animate={{scale:1}}
           transition={{duration:0.3,delay:0.3,type: "spring", stiffness: 100}}
           exit={{translateX:-500,opacity:0}}
           >
            <Image src="/images/Logos/Logo_Flag.png" width={300} height={300} alt=""></Image>
            </motion.div>
          </motion.div>
        }
       </AnimatePresence>
      {/* <select onChange={handleChange}>
        {['en','tr'].map((x)=>(
          <option value={x} key={x}>{x}</option>
        ))}
      </select> */}
      <IntlProvider locale={locale} messages={message[locale]} >
        {/* <div className="App w-full min-h screen bg-gray-800" > */}
        <div>
          <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} title={<FormattedMessage id="heading" defaultMessage="Default" values={{locale}} />} />
          <div style={{'width':'100vw', 'height':'100px'}} ></div>
            <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
           
            <main title="Main">
              {children}
            </main>
            <Footer footer_title={<FormattedMessage id="heading" defaultMessage="Default" values={{locale}} />} />
        </div>
      </IntlProvider>
      </LayoutContext.Provider>
 
    </>
  );
}