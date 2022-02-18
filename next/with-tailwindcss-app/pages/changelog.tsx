import axios from 'axios'
import Head from 'next/head'
import Nav from '../components/nav'
import Changelog from '../components/changelog'
import Footer from '../components/footer'

console.log(process.env.NEXT_PUBLIC_HEADLESS_SITE_ID);
const siteID = process.env.NEXT_PUBLIC_HEADLESS_SITE_ID
const headlessURL = `hl-b.getshifter.co`
const baseURL = `https://${siteID}.${headlessURL}`
const restURL = `${baseURL}/wp-json/wp/v2`

async function getPosts() {
  try {
    const results = await axios.get(`${restURL}/posts?category=4`)
    console.log(await results.data);
  } catch (error) {
    console.error(error)
  }
}

export default function ChangelogPage({ posts = getPosts() }) {

  getPosts();

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="flex w-full flex-1 flex-col items-center px-20">
        <Changelog />
      </main>

      <Footer />
    </div>
  )
}
