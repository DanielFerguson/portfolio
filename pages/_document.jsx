import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <title>Your friendly neighbourhood social entrepreneur | Dan Ferg</title>
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <meta name="description" content="A solutions architect and software developer with an understanding of holistic design; seeking to create digitally enabled change for good." />
                    <meta name="keywords" content="social,entrepreneur,solutions,architect,software,developer,holistic,design,digitally,enabled,change,good,helping,group,yoogle,real,news,land,index" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument