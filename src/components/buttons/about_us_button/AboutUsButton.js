import classes from '../regular_button/Regular_button.module.css'
import Link from 'next/link';
const AboutUsButton = ({handleScroll}) =>{
    return <div onClick={() => handleScroll()} className={classes.button + " " + classes.button_} id="button-5">
    <div className={classes.translate}></div>
    <button className={classes.link} >About Us</button>
  </div>
}

export default AboutUsButton;