import styles from '@styles/components/ArgumentCard.module.scss';

function ArgumentCard() {
   return (
      <div className={styles.container}>
         <div className={styles.image}></div>
         <div className={styles.infos}>
            <div className={styles.title}>Personalizable</div>
            <div className={styles.description}>Complet Server and best maintanence</div>
            <div className={styles.button}>Voir Plus</div>
         </div>
      </div>
   );
}

export default ArgumentCard;
