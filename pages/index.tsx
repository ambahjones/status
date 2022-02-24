import Head from 'next/head'
import Nav from '../components/nav'
import Services from '../components/services'
import Status from '../components/status'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Shifter System Status</title>
        <link rel="icon" href="/shifter.svg" />
        <meta property='og:title' content='Shifter System Status' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/shifter.svg' />
        <meta property='og:url' content='https://dev-status-getshifter.netlify.app' />
      </Head>

      <Nav />

      <main className="flex w-full flex-1 flex-col items-center px-6 sm:px-20">
        <Status />
        <Services />
      </main>

      <Footer />
    </div>
  )
}
