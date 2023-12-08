import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Inter, Ubuntu } from 'next/font/google';
import { theme } from '@/lib/themes';
import Layout from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });
const ubuntu = Ubuntu({ weight: ["400", "500", "700"], subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
        :root {
          --font-inter: ${inter.style.fontFamily};
          --font-ubuntu: ${ubuntu.style.fontFamily};
        }
        body {
          font-family: var(--font-inter);
          background-color: #1F2024 !important;
          overflow-x: hidden !important;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-ubuntu) !important;
        }
        .customScroll ::-webkit-scrollbar {
          width: 12px;
          height: 20px;
        }
        .customScroll ::-webkit-scrollbar-track {
          background: transparent;
        }
        .customScroll ::-webkit-scrollbar-thumb {
          background-color: #7A7676;
          border-radius: 50px;
          border: 8px solid #1F2024;
        }
      `}
      </style>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}
