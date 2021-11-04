import Head from 'next/head';
import type { AppProps } from 'next/app';

import 'antd/dist/antd.css';

import { AuthProvider } from '@/contexts';

import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <div className="app">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="theme-color" content="#333333" />
                    <title>Simple Contacts</title>
                </Head>
                <Component {...pageProps} />
            </div>
        </AuthProvider>
    );
}
export default MyApp;
