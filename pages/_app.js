// import '../styles/globals.css'; // Import global styles, including NProgress CSS
// import NProgress from 'nprogress';
// import Router from 'next/router';

// // Configure NProgress
// NProgress.configure({ showSpinner: false });

// // Bind NProgress to Router events
// Router.events.on('routeChangeStart', () => NProgress.start());
// Router.events.on('routeChangeComplete', () => NProgress.done());
// Router.events.on('routeChangeError', () => NProgress.done());

// // Your existing _app.js content
// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;



import '../styles/globals.css'; // Import global styles, including NProgress CSS
import NProgress from 'nprogress';
import Router from 'next/router';
import { Provider as AuthProvider } from 'next-auth/react';
import LayoutPrivate from '../app/dashboard/layout'; // Adjust the import path as necessary

// Configure NProgress
NProgress.configure({ showSpinner: false });

// Bind NProgress to Router events
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // Define private routes
  const privateRoutes = ['/dashboard']; // Add other private routes if needed

  // Check if the current page is a private route
  const isPrivate = privateRoutes.includes(Router.pathname);

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
