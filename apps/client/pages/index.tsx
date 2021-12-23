import { useContext, useEffect } from 'react';
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
      <div>
         <div>test: {JSON.stringify(company)}</div>
      </div>
   );
}

export default Index;
