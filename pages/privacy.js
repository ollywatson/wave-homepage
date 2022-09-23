import Head from 'next/head';
import { Container, Row, Col } from "react-bootstrap";

export default function PrivacyPolicy() {
    return (
      <div >
        <Head>
          <title>Privacy Policy</title>
          <meta name="description" content="Read our privacy policy" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
            crossOrigin="anonymous"
          />
        </Head>
  
        <main>
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vSNTxeV-viru8YDMOaCGxQdooAifgB25hI4N8NWt-Z2MNbyFzdlB0xrd0UX20ad22eyedlzPL3SE4PQ/pub?embedded=true"></iframe>
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