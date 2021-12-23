import Head from './Head';
import Footer from './Footer';
import NavBar from './NavBar';
import { ReactNode } from 'react';
import { NextComponentType } from 'next';

function Layout({ children }: { children: React.ReactNode }) {
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
