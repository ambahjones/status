import Head from 'next/head'
import Nav from '../components/nav'
import Updates from '../components/updates'
import Footer from '../components/footer'

export default function History() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Status History</title>
        <link rel="icon" href="/shifter.svg" />
        <meta property='og:title' content='Shifter Status History' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/shifter.svg' />
        <meta property='og:url' content='https://dev-status-getshifter.netlify.app/history/' />
      </Head>

      <Nav />

      <main className="flex w-full flex-1 flex-col items-center px-6 sm:px-20">
        <Updates />
      </main>

      <Footer />
    </div>
  )
}
