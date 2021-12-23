import React from 'react';
import styles from '@styles/components/Button1.module.scss';

function Button1({ children: text, onClick }: { children: string; onClick: () => void }) {
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
      </button>
   );
}

export default Button1;
