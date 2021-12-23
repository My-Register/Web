import styles from '@styles/components/NavBar.module.scss';
import UserContext from '@libs/context/UserContext';

function NavBar() {
   return (
      <div className={styles.container}>
         <div className={styles.left}>
            <img className={styles.logo} src="icon.png" alt="main-logo" />
            <div>MyRegister</div>
            <ul>
               <li>Home</li>
               <li>Features</li>
               <li>About Us</li>
            </ul>
         </div>
         <div className={styles.right}>
            <div>Pricing</div>
            <div>Login/Dashboard</div>
         </div>
      </div>
   );
}

export default NavBar;
