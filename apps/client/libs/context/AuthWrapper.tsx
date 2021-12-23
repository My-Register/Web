// import { Auth } from "../api";
import UserContext from './UserContext';
// import { UserInterface } from "../interfaces";
import { useEffect, useState, useMemo } from 'react';

function AuthWrapper({ children }: { children: any }) {
   const [loading, setLoading] = useState<boolean>(true);
   const [user, setUser] = useState<{ email: string } | null>(null);
   const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);

   useEffect(() => {
      /*
      Auth.IsLogedIn().then(({ data: user }) => {
         setUser(user ? user : null);
         setLoading(false);
      });
      */

      setUser({ email: 'test' });
      setLoading(false);
   }, []);

   return !loading && <UserContext.Provider value={providerUser}>{children}</UserContext.Provider>;
}

export default AuthWrapper;
