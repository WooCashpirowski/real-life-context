import Head from 'next/head'
import Footer from '../Footer/Footer'

import { createClient } from 'contentful'
import Navbar from '../Navbar/Navbar'
import { Container, MediaWrapper } from './LayoutStyled'

const Layout = ({ title, desc, keywords, children, path }) => {
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Navbar path={path} />
      <MediaWrapper>{children}</MediaWrapper>
      <Footer />
    </Container>
  )
}

export default Layout

Layout.defaultProps = {
  title: 'Real Life Context | Platform',
  description: 'Learn and teach practical English',
  keywords:
    'English language, quizzes, English for adults, Free materials for English teachers, Erasmus plus, learn English, teach English',
  path: '/',
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const res = await client.getEntries({
    content_type: 'footer',
  })
  return {
    props: {
      footer: res,
    },
  }
}
