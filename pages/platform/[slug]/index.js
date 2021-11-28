import { createClient } from 'contentful'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../../components/Layout/Layout'

const ModulePage = ({ module }) => {
  const lessons = module.fields.lessons.content.filter(
    (item) => item.nodeType === 'embedded-entry-block',
  )

  return (
    <Layout path="/platform">
      <h1>{module.fields.title}</h1>
      <h2>{module.fields.desc}</h2>
      {lessons.map((lesson, i) => {
        const {
          data: {
            target: { fields },
          },
        } = lesson
        return (
          <Link
            href={`/platform/${module.fields.slug}/${fields.slug}`}
            key={fields.id}
          >
            <a>
              <h3>{fields.title}</h3>
              <Image
                src={`https:${fields.thumbnail.fields.file.url}`}
                width={fields.thumbnail.fields.file.details.image.width}
                height={fields.thumbnail.fields.file.details.image.height}
                alt={fields.thumbnail.fields.title}
              />
            </a>
          </Link>
        )
      })}
    </Layout>
  )
}

export default ModulePage

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: 'module',
  })

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const { items } = await client.getEntries({
    content_type: 'module',
    'fields.slug': slug,
  })

  return {
    props: { module: items[0] },
  }
}
