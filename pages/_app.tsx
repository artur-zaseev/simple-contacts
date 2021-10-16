import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="app">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#333333" />
                <title>Simple Contacts</title>
            </Head>
            <Component {...pageProps} />
        </div>
    );
}
export default MyApp;
