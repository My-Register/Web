import React from 'react';
import type { CompanyInterface } from '@./shared-types';

const CompanyContext = React.createContext<{
   company: CompanyInterface | null;
   /*You can alsso put the return of the setCompany function to void (company: CompanyInterface) =>  void*/
   setCompany: React.Dispatch<React.SetStateAction<CompanyInterface>>;
} | null>(null);

export default CompanyContext;
