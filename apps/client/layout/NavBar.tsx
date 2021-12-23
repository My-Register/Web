import { Button1 } from '@components/index';
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
               <li>Home</li>
               <li>Features</li>
               <li>About</li>
            </ul>
         </div>
         <div className={styles.right}>
            <div>Pricing</div>
            <Button1 onClick={() => null}>Login</Button1>
         </div>
      </div>
   );
}

export default NavBar;
