import '@styles/global.scss';
import Layout from '../layout';
import { AppProps } from 'next/app';
import AuthWrapper from '../libs/context/AuthWrapper';

function CustomApp({ Component, pageProps }: AppProps) {
   return (
      <AuthWrapper>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </AuthWrapper>
   );
}

export default CustomApp;
