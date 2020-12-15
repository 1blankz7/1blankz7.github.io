import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "@services/gtag";


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/png" href="/assets/favicon.png" />
          <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="61c3fae0-31ac-4641-b111-e9d1591810e8" data-blockingmode="auto" type="text/javascript" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `
            }}
          />
        </Head>
        <body>
          <script id="CookieDeclaration" src="https://consent.cookiebot.com/61c3fae0-31ac-4641-b111-e9d1591810e8/cd.js" type="text/javascript" async />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
