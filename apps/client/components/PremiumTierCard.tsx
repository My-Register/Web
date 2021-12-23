import { Button1 } from '@components';
import styles from '@styles/components/PremiumTierCard.module.scss';

function PremiumTierCard() {
   return (
      <div className={styles.container}>
         <div className={styles.header}>
            <div className={styles.title}>Premium Tier</div>
            <div className={styles.description}>
               <p>
                  This trial gives you a big advantage for you And all of your family and will let you be a bilionnaire
                  in 20 secondes
               </p>
            </div>
         </div>
         <hr />
         <div className={styles.content}>
            <div className={styles.arg}>
               <span className="color-green">✓</span> Fully <span className="bold">refundable</span> for 7 days
            </div>
            <div className={styles.arg}>
               <span className="color-green">✓</span> support <span className="bold">available</span> 24/7
            </div>
            <div className={styles.arg}>
               <span className="color-green">✓</span> <span className="bold">75% options</span> are customisable
            </div>
         </div>
         <hr />
         <div className={styles.footer}>
            <Button1 onClick={() => null}>Acheter</Button1>
         </div>
      </div>
   );
}

export default PremiumTierCard;
