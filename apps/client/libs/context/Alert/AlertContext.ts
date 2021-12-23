import React from 'react';
import AlertType from './AlertType';

const CompanyContext = React.createContext<{
   alerts: AlertType[];
   dissmissAlert: () => void;
   /*Not empty Alert Array Type:  AlertType[] & { 0: AlertType }*/
   pushAlerts: (alert: AlertType[] & { 0: AlertType }) => void;
} | null>(null);

export default CompanyContext;
