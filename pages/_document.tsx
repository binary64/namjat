import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <link rel='stylesheet' href='https://unpkg.com/antd@3/dist/antd.min.css' />
          <link rel='stylesheet' href='https://unpkg.com/primereact/resources/themes/omega/theme.css' />
          <link rel='stylesheet' href='https://unpkg.com/primereact/resources/primereact.min.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
