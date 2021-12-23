import '@styles/global.scss';
import Layout from '../layout';
import { AppProps } from 'next/app';
import AuthWrapper from '@libs/context/AuthWrapper';
import Alert from '@libs/context/Alert/AlertComponent';
import AlertWrapper from '@libs/context/Alert/AlertWrapper';

function CustomApp({ Component, pageProps }: AppProps) {
   return (
      <AlertWrapper>
         <AuthWrapper>
            <Alert />
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </AuthWrapper>
      </AlertWrapper>
   );
}

export default CustomApp;
