// import { Auth } from "../api";
import React from 'react';
import CompanyContext from './CompanyContext';
import { useEffect, useState, useMemo, ReactNode } from 'react';
import type { CompanyInterface } from '@./shared-types';

function AuthWrapper({ children }: { children: ReactNode }) {
   const [loading, setLoading] = useState<boolean>(true);
   const [company, setCompany] = useState<CompanyInterface | null>(null);
   const provider: {
      company: CompanyInterface;
      setCompany: React.Dispatch<React.SetStateAction<CompanyInterface>>;
   } = useMemo(() => ({ company, setCompany }), [company, setCompany]);
   useEffect(() => {
      /*
      Auth.IsLogedIn().then(({ data: user }) => {
         setCompany(user ? user : null);
         setLoading(false);
      });
      */

      setCompany(null);
      setLoading(false);
   }, []);

   return !loading && <CompanyContext.Provider value={provider}>{children}</CompanyContext.Provider>;
}

export default AuthWrapper;
