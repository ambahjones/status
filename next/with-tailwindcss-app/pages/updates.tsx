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
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="flex w-full flex-1 flex-col items-center px-20">
        <Changelog posts={posts} />
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`${restURL}/posts?category=4`)
  console.log(`${restURL}/posts?category=4`);
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
