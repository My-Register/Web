import { useContext } from 'react';
import { Button2, ArgumentCard } from '@components';
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
         <div id="home" className={styles.display}>
            <div className="animate__animated animate__tada animate__delay-1s">
               Abonner vous et bénéficier de <br /> 7 Jours gratuit !
            </div>
            <Button2 onClick={() => null}>Get Started</Button2>
         </div>
         <ArgumentCard />
      </div>
   );
}

export default Index;
