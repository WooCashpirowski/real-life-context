import { createClient } from 'contentful'
import Button from '../../../components/Button/Button'
import Flex from '../../../components/Flex/Flex'
import Layout from '../../../components/Layout/Layout'
import LessonCard from '../../../components/Lessoncard/LessonCard'
import ModuleSkeleton from '../../../components/ModuleSkeleton/ModuleSkeleton'
import Subsection from '../../../components/Subsection/Subsection'

const ModulePage = ({ module }) => {
  if (!module) return <ModuleSkeleton />

  const lessons = module.fields.lessons.content.filter(
    (item) => item.nodeType === 'embedded-entry-block',
  )

  return (
    <Layout path="/platform">
      <h1 className="lessonHeading">
        {module.fields.title} - {module.fields.desc}
      </h1>
      <Flex>
        {lessons.map((lesson, i) => {
          const {
            data: {
              target: { fields },
            },
          } = lesson
          return <LessonCard key={fields.id} lesson={fields} module={module} />
        })}
      </Flex>
      <Subsection>
        <Button text={`table of contents`} disabled={true}>
          <i className="fas fa-book-open"></i>
        </Button>
      </Subsection>
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
    fallback: true,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const { items } = await client.getEntries({
    content_type: 'module',
    'fields.slug': slug,
  })

  if (!items.length) {
    return {
      redirect: {
        destination: '/platform',
        permanent: false,
      },
    }
  }

  return {
    props: { module: items[0] },
    revalidate: 1,
  }
}
