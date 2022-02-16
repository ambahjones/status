import Head from 'next/head'
import Nav from '../components/nav'
import Updates from '../components/updates'
import Footer from '../components/footer'

export default function History() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="flex w-full flex-1 flex-col items-center px-20">
        <Updates />
      </main>

      <Footer />
    </div>
  )
}
