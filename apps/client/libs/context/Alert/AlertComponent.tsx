import { useContext } from 'react';
import styles from './Alert.module.scss';
import AlertContext from './AlertContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

function Alert() {
   /*Add an onClick system to goes on the close/confirm button*/
   /*Add Alert Type/level management system to change the color of the back and the icons*/
   const { alerts, pushAlerts, dissmissAlert } = useContext(AlertContext);

   function handleDismissClick() {
      dissmissAlert();
      if (!alerts[0].callback) return;
      try {
         alerts[0].callback();
      } catch (err) {
         console.log(err);
      }
   }

   return (
      alerts.length >= 1 && (
         <div className={styles.backdrop}>
            <div className={styles.container}>
               <div className={styles.header}>
                  <FontAwesomeIcon color="#1c2033" icon={faExclamationTriangle} size="3x" />
               </div>
               <div className={styles.content}>
                  <div className={styles.title}>{alerts[0].title}</div>
                  <div className={styles.description}>
                     <p>{alerts[0].message}</p>
                  </div>
                  <button className={styles.button} onClick={handleDismissClick}>
                     <div>Close</div>
                  </button>
               </div>
            </div>
         </div>
      )
   );
}

export default Alert;
