import styles from '@styles/components/FeatureCard.module.scss';

function FeatureCard({ title, description }: { title: string; description: string }) {
   return (
      <div className={styles.container}>
         <div className={styles.left}>Feature Card</div>
         <div className={styles.right}>
            <div className={styles.title}>Everything in the App</div>
            <div className={styles.description}>
               <p>
                  L'appli est simple a utiliser, facile a manipuler Tout peut etre personaliser sans exeptions meme
                  votre daronne. Cette salope, elle aussi peut etre modifier depuis l'appli
               </p>
            </div>
         </div>
      </div>
   );
}

export default FeatureCard;
