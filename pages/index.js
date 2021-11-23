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
  const {
    hero: { fields: hero },
    about: { fields: about },
    outputs: { fields: outputs },
    partners: { fields: partners },
    footer: { fields: footer },
  } = props
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
  const res = await client.getEntries()
  return {
    props: {
      hero: res.items.find((item) => item.fields.id === 'hero'),
      outputs: res.items.find((item) => item.fields.id === 'outputs'),
      partners: res.items.find((item) => item.fields.id === 'partners'),
      footer: res.items.find((item) => item.fields.id === 'footer'),
      about: res.items.find((item) => item.fields.id === 'about'),
    },
  }
}
