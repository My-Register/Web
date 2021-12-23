import Link from 'next/link';
import { Button1 } from '@components';
import CompanyContext from '@libs/context/CompanyContext';
import styles from '@styles/components/NavBar.module.scss';

function NavBar() {
   return (
      <div className={styles.container}>
         <div className={styles.left}>
            <div className={styles.logo}>
               <div className={styles.sandwich}></div>
               <div className={styles.icon}></div>
               <div className={styles.text}>
                  <div className={styles.title}>MyRegister</div>
                  <div className={styles.desc}>
                     Everything
                     <br />
                     in your smartphone
                  </div>
               </div>
            </div>
            <ul>
               <Link href="/" passHref>
                  <li>Home</li>
               </Link>
               <Link href="/#features" passHref>
                  <li>Features</li>
               </Link>
               <Link href="/about" passHref>
                  <li>About</li>
               </Link>
            </ul>
         </div>
         <div className={styles.right}>
            <Link href="/#pricing" passHref>
               <div>Pricing</div>
            </Link>
            <Button1 onClick={() => null}>Login</Button1>
         </div>
      </div>
   );
}

export default NavBar;
