import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Header() {
   const router = useRouter();
   const title = router.pathname.split('/').pop();

   return (
      <Head>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
         <title>{title}</title>
      </Head>
   );
}
