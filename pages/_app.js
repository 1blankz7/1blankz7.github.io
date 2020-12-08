import React from "react";
import { MDXProvider } from "@mdx-js/react";
import "../styles/index.css";


const mdComponents = {};

export default ({ Component, pageProps }) => (
  <MDXProvider components={mdComponents}>
    <Component {...pageProps} />
  </MDXProvider>
);
