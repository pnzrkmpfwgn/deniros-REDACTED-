import { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { IntlProvider,FormattedMessage } from "react-intl";
import LayoutContext from "./layoutContext";
import MenuOverlay from '../Menu/MenuOverlay';
import {message} from  '../../data/langData';
import { motion, AnimatePresence } from "framer-motion"
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

  const [locale, setLocale] = useState('en');
  const [navbarOpen,setNavbarOpen] = useState(false);
  const handleChange = (e) => {
    setLocale(e.target.value);
  };
  return (
    <>
       <LayoutContext.Provider value={{locale}} >
      
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