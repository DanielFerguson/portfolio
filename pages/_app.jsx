/* eslint-disable */

import { useEffect } from 'react';
import Router from 'next/router';
import { load, trackPageview } from 'fathom-client';

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// Record a pageview when route changes
Router.events.on('routeChangeComplete', () => {
  trackPageview();
});

function App({ Component, pageProps }) {
  useEffect(() => {
    load('LARYKSES', {
      includedDomains: ['danferg.com', 'www.danferg.com'],
    });
  }, []);

  return <Component {...pageProps} />;
}

export default App;