import { useContext } from 'react';
import { Button2, ArgumentCard, PremiumTierCard, BlogPostCard } from '@components';
import styles from '@styles/pages/index.module.scss';
import type { CompanyInterface } from '@./shared-types';
import CompanyContext from '@libs/context/CompanyContext';

export function Index() {
   const {
      company,
   }: {
      company: CompanyInterface;
      setCompany: React.Dispatch<React.SetStateAction<CompanyInterface>>;
   } = useContext(CompanyContext);

   return (
      <div className={styles.container}>
         {/*---Home*/}
         <div id="home" className={styles.display}>
            <h2 className="animate__animated animate__tada">
               Abonner vous et bénéficier de <br /> 7 Jours gratuit !
            </h2>
            <Button2 onClick={() => null}>Get Started</Button2>
         </div>
         {/*---Selling Arguments*/}
         <div className={styles.args}>
            <h2 className={styles.title}>Why you will choose us ?</h2>
            <div className={styles.cards}>
               <ArgumentCard />
               <ArgumentCard />
               <ArgumentCard />
            </div>
         </div>
         {/*---More*/}
         <div className={styles.more}>
            <div className={styles.text}>
               <p>
                  Implement it in few seconds grace A notre equipe d'assitance competente Reactive et qui vous assistera
                  tout au long de votre Reconversion
               </p>
            </div>
            <div>
               <Button2 onClick={() => null}>Get Started</Button2>
            </div>
         </div>
         {/*Pricing*/}
         <div className={styles.pricing}>
            <h2 className={styles.title}>
               Multiple Tiers ! <br /> To Adapt your situation !
            </h2>
            <div className={styles.cards}>
               <PremiumTierCard />
               <div>
                  <PremiumTierCard />
               </div>
               <PremiumTierCard />
            </div>
         </div>
         {/*--Table with detailed pricing*/}
         {/*--Partners*/}
         {/*--Blog Posts*/}
         <div className={styles.blogposts}>
            <div className={styles.cards}>
               <BlogPostCard title="New Features !" category="News & Update" author="raiden" />
               <BlogPostCard title="New Features !" category="News & Update" author="raiden" />
               <BlogPostCard title="New Features !" category="News & Update" author="raiden" />
            </div>
         </div>
      </div>
   );
}

export default Index;
