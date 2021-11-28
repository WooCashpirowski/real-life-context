import Head from 'next/head'
import { createClient } from 'contentful'
import { useRouter } from 'next/router'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Hero from '../components/Hero/Hero'
import Outputs from '../components/Outputs/Outputs'
import Footer from '../components/Footer/Footer'
import Partners from '../components/Partners/Partners'

export default function Home(props) {
  const { hero, about, outputs, partners, footer } = props
  const { locale } = useRouter()

  return (
    <div>
      <Head>
        <title>Real Life Context | English in real life</title>
        <meta name="description" content="Learn and teach practical English" />
        <meta
          name="keywords"
          content="English for adults, free quizzes, angielski dla dorosłych, nauka angielskiego, darmowe quizy, materiały dla lektorów"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero hero={hero} />
      <About locale={locale} about={about} />
      <Outputs locale={locale} outputs={outputs} />
      <Partners locale={locale} partners={partners} />
      <Footer footer={footer} />
    </div>
  )
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })
  const heroRes = await client.getEntries({
    content_type: 'hero',
  })
  const aboutRes = await client.getEntries({
    content_type: 'about',
  })
  const outputsRes = await client.getEntries({
    content_type: 'outputs',
  })
  const partnersRes = await client.getEntries({
    content_type: 'partners',
  })
  const footerRes = await client.getEntries({
    content_type: 'footer',
  })
  return {
    props: {
      hero: heroRes.items[0].fields,
      about: aboutRes.items[0].fields,
      outputs: outputsRes.items[0].fields,
      partners: partnersRes.items[0].fields,
      footer: footerRes.items[0].fields,
    },
  }
}
