import Layout from '@/components/layout';
import { CartProvider } from '@/context/cartContext';
import '@/styles/globals.css'
import { AppProps } from 'next/app';

export default function App({Component, pageProps }: AppProps) {
    return (
        <CartProvider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
        </CartProvider>
    )
}