import Link from 'next/link';
import styles from '@styles/components/Footer.module.scss';
import { faDiscord, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
   return (
      <div className={styles.container}>
         <div className={styles.title}>MyRegister</div>
         <div className={styles.items}>
            <Link href="/contacts" passHref>
               <div className={styles.item}>Contacts</div>
            </Link>
            <Link href="/dashboard" passHref>
               <div className={styles.item}>Dashboard</div>
            </Link>
            <Link href="/download" passHref>
               <div className={styles.item}>Download</div>
            </Link>
         </div>
         <div className={styles.socials}>
            <Link href="#" passHref>
               <div className={styles.social}>
                  <FontAwesomeIcon icon={faDiscord} />
               </div>
            </Link>
            <Link href="#" passHref>
               <div className={styles.social}>
                  <FontAwesomeIcon icon={faTwitter} />
               </div>
            </Link>
            <Link href="#" passHref>
               <div className={styles.social}>
                  <FontAwesomeIcon icon={faInstagram} />
               </div>
            </Link>
         </div>
         <div className={styles.copyrights}>Copyright © 2021 Dgc Industries.</div>
      </div>
   );
}

export default Footer;
