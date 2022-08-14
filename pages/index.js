import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Header from '../components/Header';
import CopyrightFooter from '../components/CopyrightFooter';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Wave messaging</title>
        <meta name="description" content="Download the Wave messaging app now" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossOrigin="anonymous"
        />
      </Head>

      <main>
        <Header />
        <Hero />
        <CopyrightFooter />
      </main>

      <footer>
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin></script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossOrigin></script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossOrigin></script>
      </footer>
    </div>
  )
}
