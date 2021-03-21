import React, { useEffect } from "react";
import type { AppProps } from 'next/app'
import { MDXProvider } from "@mdx-js/react";
import "../styles/index.css";
import Nav from "../components/Header";
import Footer from "../components/Footer";
import * as Components from "../components/BasicComponents";
import { useRouter } from "next/dist/client/router";
import {pageview} from "@services/gtag";

const mdComponents = {
  h1: Components.H1,
  h2: Components.H2,
  h3: Components.H3,
  h4: Components.H4,
  p: Components.P,
};

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <MDXProvider components={mdComponents}>
        <Nav />
        <main className="max-w-5xl mx-auto p-10">
          <Component {...pageProps} />
        </main>
        <Footer />
      </MDXProvider>
    </>
  );
};
export default App;
