import React from "react";
import { MDXProvider } from "@mdx-js/react";
import "../styles/index.css";
import Nav from "../components/nav";
import Footer from "../components/footer";

const mdComponents = {};

export default ({ Component, pageProps }) => (
  <MDXProvider components={mdComponents}>
    <Nav />
    <main className="max-w-5xl mx-auto pb-10 pt-10">
      <Component {...pageProps} />
    </main>
    <Footer />
  </MDXProvider>
);
