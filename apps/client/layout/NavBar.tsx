import { Button1 } from '@components/index';
import CompanyContext from '@libs/context/CompanyContext';
import styles from '@styles/components/NavBar.module.scss';

function NavBar() {
   return (
      <div className={styles.container}>
         <Button1>Login</Button1>
      </div>
   );
}

export default NavBar;
