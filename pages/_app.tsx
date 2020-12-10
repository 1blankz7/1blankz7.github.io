import React from "react";
import type { AppProps } from 'next/app'
import { MDXProvider } from "@mdx-js/react";
import "../styles/index.css";
import Nav from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import * as Components from "../components/BasicComponents";

const mdComponents = {
  h1: Components.H1,
  h2: Components.H2,
  p: Components.P,
};

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Christian Blank</title>
    </Head>
    <MDXProvider components={mdComponents}>
      <Nav />
      <main className="max-w-5xl mx-auto pb-10 pt-10">
        <Component {...pageProps} />
      </main>
      <Footer />
    </MDXProvider>
  </>
);

export default App;
