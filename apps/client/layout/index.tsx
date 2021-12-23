import Head from './Head';
import Footer from './Footer';
import NavBar from './NavBar';
import { ReactChildren } from 'react';
import { NextComponentType } from 'next';

function Layout({ children }: { children: any }) {
   return (
      <>
         <NavBar />
         <Head />
         <main className="app">{children}</main>
         <Footer />
      </>
   );
}

export default Layout;
