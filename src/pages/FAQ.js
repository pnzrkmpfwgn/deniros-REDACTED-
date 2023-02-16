import classes from '../styles/FAQ.module.css';
import Link from 'next/link';

const FAQ = ()=>{
    return <>
        <div className={classes.heading_container} >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={classes.bg} src="/images/8.jpg" alt="" />
            <h3 className={classes.heading} > Frequently Asked Questions </h3>
        </div>
        <div className={classes.container}>
        <div className={classes.question_container}>
             <div>
                <h4> Question: </h4>
                </div>
        </div>
        <div className={classes.answer_container}>
             <div>
                <h4> Answer: </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia tempore pariatur corrupti ipsum corporis? Ex facilis ratione placeat eius recusandae consequuntur facere iusto dignissimos, voluptatem, labore nam atque, ipsum omnis?</p>
                </div>
        </div>
        <div className={classes.question_container}>
             <div>
                <h4> Question: </h4>
                </div>
        </div>
        <div className={classes.answer_container}>
             <div>
                <h4> Answer: </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia tempore pariatur corrupti ipsum corporis? Ex facilis ratione placeat eius recusandae consequuntur facere iusto dignissimos, voluptatem, labore nam atque, ipsum omnis?</p>
                </div>
        </div>
        <div className={classes.question_container}>
             <div>
                <h4> Question: </h4>
                </div>
        </div>
        <div className={classes.answer_container}>
             <div>
                <h4> Answer: </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia tempore pariatur corrupti ipsum corporis? Ex facilis ratione placeat eius recusandae consequuntur facere iusto dignissimos, voluptatem, labore nam atque, ipsum omnis?</p>
                </div>
        </div>
        </div>
    </>
}

export default FAQ;