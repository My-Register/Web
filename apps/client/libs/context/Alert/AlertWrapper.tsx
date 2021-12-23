import React from 'react';
import AlertType from './AlertType';
import AlertContext from './AlertContext';
import { useState, useMemo, ReactNode } from 'react';

function AlertWrapper({ children }: { children: ReactNode }) {
   const [alerts, setAlerts] = useState<AlertType[]>([
      // {
      //    title: 'Alert',
      //    type: 'warnning',
      //    message: 'No Dismiss dsqdsq dsq dsqdqs dsq dsd sqddsq d dsqdsqdqs',
      //    callback: () => console.log('Clicked Alert !!!'),
      // },
   ]);

   function pushAlerts(newAlerts: AlertType[] & { 0: AlertType }) {
      setAlerts((previousAlerts) => {
         return [...previousAlerts, ...newAlerts];
      });
   }

   function dissmissAlert() {
      const newAlerts = [...alerts];
      newAlerts.shift();
      setAlerts(newAlerts);
   }

   const provider: {
      alerts: AlertType[];
      dissmissAlert: () => void;
      pushAlerts: (alert: AlertType[] & { 0: AlertType }) => void;
      /*Problemes ?*/
   } = useMemo(() => ({ alerts, dissmissAlert, pushAlerts }), [alerts]);

   return <AlertContext.Provider value={provider}>{children}</AlertContext.Provider>;
}

export default AlertWrapper;
