import {
  // eslint-disable-next-line import/no-named-default
  default as NextDocument,
  Html,
  NextScript,
  Head,
  Main,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class Document extends NextDocument {
  /* eslint-disable */
    // Server side render styled components
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
                });
            const initialProps = await NextDocument.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
    /* eslint-enable */

  render(): JSX.Element {
    return (
      <Html lang="en-US">
        <Head>
          <meta name="monetization" content="$ilp.uphold.com/XqPZ8mnNyprk" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
