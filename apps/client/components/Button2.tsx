import styles from '@styles/components/Button2.module.scss';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button2({ children: text, onClick }: { children: string; onClick: () => void }) {
   function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
      event.preventDefault();
      try {
         onClick();
      } catch (err) {
         /*Put an alert to show up the error to the user*/
         console.log(err);
      }
   }

   return (
      <button className={styles.button} onClick={handleClick}>
         <div>{text}</div>
         <FontAwesomeIcon className={styles.icon} icon={faArrowRight} size="2x" />
      </button>
   );
}

export default Button2;
