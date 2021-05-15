import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <style jsx global>
            {`
              /* Other global styles such as 'html, body' etc... */

              #__next {
                height: 100%;
              }
            `}
          </style>
        </body>
      </Html>
    )
  }
}

export default MyDocument
