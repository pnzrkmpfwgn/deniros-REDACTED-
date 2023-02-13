import classes from '../regular_button/Regular_button.module.css'
import Link from 'next/link';
const AboutUsButton = () =>{
    return <div className={classes.button + " " + classes.button_} id="button-5">
    <div className={classes.translate}></div>
    <Link href="#" className={classes.link} >About Us</Link>
  </div>
}

export default AboutUsButton;