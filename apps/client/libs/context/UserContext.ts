import { createContext } from 'react';

const UserContext = createContext<{
   user: { email: string } | null;
   setUser: (user: any) => any;
} | null>(null);

export default UserContext;
