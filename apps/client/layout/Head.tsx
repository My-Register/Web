import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Header() {
   const router = useRouter();
   const title = router.pathname.split('/').pop();

   return (
      <Head>
         <title>{title}</title>
      </Head>
   );
}
