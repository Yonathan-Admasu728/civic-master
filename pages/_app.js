"use client";

import '../styles/globals.css'; // Import global styles, including NProgress CSS
import NProgress from 'nprogress';
import Router from 'next/router';
import { SessionProvider as AuthProvider } from 'next-auth/react';
import LayoutPrivate from '../app/dashboard/layout'; // Adjust the import path as necessary

// Configure NProgress
NProgress.configure({ showSpinner: false });

// Bind NProgress to Router events
if (typeof window !== 'undefined') {
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // Define private routes
  const privateRoutes = ['/dashboard']; // Add other private routes if needed

  // Check if the current page is a private route
  const isPrivate = typeof window !== 'undefined' && privateRoutes.includes(Router.pathname);

  return (
    <AuthProvider session={session}>
      {isPrivate ? (
        <LayoutPrivate>
          <Component {...pageProps} />
        </LayoutPrivate>
      ) : (
        <Component {...pageProps} />
      )}
    </AuthProvider>
  );
}

export default MyApp;
