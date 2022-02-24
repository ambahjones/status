import Head from 'next/head'
import Nav from '../components/nav'
import Changelog from '../components/changelog'
import Footer from '../components/footer'

const siteID = process.env.NEXT_PUBLIC_HEADLESS_SITE_ID
const headlessURL = `hl-b.getshifter.co`
const baseURL = `https://${siteID}.${headlessURL}`
const restURL = `${baseURL}/wp-json/wp/v2`

export interface UpdatesProps {
  posts?: Record<string, unknown>
}

export default function Updates({ posts }: UpdatesProps) {

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Shifter Changelog</title>
        <link rel="icon" href="/shifter.svg" />
        <meta property='og:title' content='Shifter Changelog Updates' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/shifter.svg' />
        <meta property='og:url' content='https://dev-status-getshifter.netlify.app/updates/' />
      </Head>

      <Nav />

      <main className="flex w-full flex-1 flex-col items-center px-6 sm:px-20">
        <Changelog posts={posts} />
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${restURL}/posts?category=4`)
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}
