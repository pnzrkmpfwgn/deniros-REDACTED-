import Link from 'next/link';
import SocialButtons from '../buttons/social_buttons/SocialButtons';
import classes from './menuOverlay.module.css';

const MenuOverlay=({navbarOpen,setNavbarOpen})=>{
    return  <nav
    className={`fixed flex top-0 left-0 w-full p-10 z-10 h-screen pt-24 bg-gray-900 text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${
      navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
    }`}
  >
    <ul style={{'marginTop':'30px'}} className="w-full flex flex-col items-start z-20">
      <li className={classes.nav_li}  onClick={(e) => {
            e.preventDefault();
            setNavbarOpen(false);
          }}>
        <Link
          href="/"
          className="nav-link"
        >
          Home
        </Link>
      </li>
      <li className={classes.nav_li}   onClick={(e) => {
            e.preventDefault();
            setNavbarOpen(false);
          }} >
        <Link
          href="/menu"
          className="nav-link"
        >
          Menu
        </Link>
      </li>
      <li className={classes.nav_li} onClick={(e) => {
            e.preventDefault();
            setNavbarOpen(false);
          }} >
        <Link
          href="/contact"
          className="nav-link"
        >
          Contact
        </Link>
      </li>
      <li className={classes.nav_li} onClick={(e) => {
            e.preventDefault();
            setNavbarOpen(false);
          }} >
        <Link
          href="/FAQ"
          className="nav-link"
        >
          FAQ
        </Link>
      </li>
      <li>
        <SocialButtons />
      </li>
    </ul>
  </nav>
}

export default MenuOverlay