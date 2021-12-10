import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../Footer/Footer.module.css'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles['footer-col']}>
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">privacy</a></li>
                            </ul>
                        </div>
                        <div className={styles['footer-col']}>
                            <h4>Get help</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">mail</a></li>
                                <li><a href="#">contact</a></li>
                            </ul>
                        </div>
                        <div className={styles['footer-col']}>
                            <h4>Follow us</h4>
                            <div className={styles['social-links']}>
                                <a href="https://www.facebook.com/">< FontAwesomeIcon icon={faFacebookF}/></a>
                                <a href="https://www.instagram.com/accounts/login/">< FontAwesomeIcon icon={faInstagram}/></a>
                                <a href="https://twitter.com/">< FontAwesomeIcon icon={faTwitter}/></a>
                                <a href="https://www.youtube.com/">< FontAwesomeIcon icon={faYoutube}/></a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Footer
