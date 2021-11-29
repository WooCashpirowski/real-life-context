import { createClient } from 'contentful'
import Layout from '../../components/Layout/Layout'
import Grid from '../../components/Grid/Grid'
import ModuleCard from '../../components/ModuleCard/ModuleCard'
import Subsection from '../../components/Subsection/Subsection'
import Button from '../../components/Button/Button'
import Link from 'next/link'

const PlatformPage = ({ modules, image }) => {
  return (
    <Layout>
      <Grid>
        {modules
          .map((module) => <ModuleCard key={module.sys.id} module={module} />)
          .reverse()}
      </Grid>
      <Subsection image={image}>
        <Button text={`trainer's manual`} disabled={true}>
          <i className="fas fa-book-open"></i>
        </Button>
        <a
          href="https://ic-english.eu/platforma/"
          target="_blank"
          rel="noreferrer"
        >
          more quizzes and multimedia
          <i className="fas fa-long-arrow-alt-right"></i>
        </a>
      </Subsection>
    </Layout>
  )
}

export default PlatformPage

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const res = await client.getEntries({
    content_type: 'module',
  })

  const assets = await client.getAssets()

  return {
    props: {
      modules: res.items,
      image: assets.items.filter(
        (item) => item.fields.file.fileName === 'rlc-hero.png',
      )[0].fields.file,
    },
    revalidate: 1,
  }
}
