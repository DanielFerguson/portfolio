import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    Fathom.load('IHFUTVIS', {
      includedDomains: ['danferg.com'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default App