import Link from 'next/link';
import classes from '../styles/contact.module.css';

const Contact=()=>{
    return <>
        <div className={classes.heading_container} >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={classes.bg} src="/images/7.jpg" alt="" />
            <h3 className={classes.heading} > Contact </h3>
        </div>
        <div className={classes.contact_container}>
             <div className={classes.contact_details}>
                <address> ADRES </address>
                <p> Mobile Number: </p>
                <p> Landline: </p>
                <Link href="#"> whatsapp <i className='fa fa-whatsapp'></i> </Link>
                </div>
        </div>
    </>
}

export default Contact;