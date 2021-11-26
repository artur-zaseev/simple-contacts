import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { UserControl } from '@components/UserControl';

import { store } from '@store/index';

import '../styles/globals.css';
import 'antd/dist/antd.css';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <div className="app">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="theme-color" content="#333333" />
                    <title>Simple Contacts</title>
                </Head>
                <UserControl>
                    <Component {...pageProps} />
                </UserControl>
            </div>
        </Provider>
    );
}
export default MyApp;
