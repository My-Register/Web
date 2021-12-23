import { useContext } from 'react';
import UserContext from '../../libs/context/UserContext';

function Dashboard() {
   const user = useContext(UserContext);

   return (
      <div>
         <div>Dashboard: {JSON.stringify(user)}</div>
      </div>
   );
}

export default Dashboard;
