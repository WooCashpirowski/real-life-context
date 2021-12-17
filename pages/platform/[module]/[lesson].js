import { createClient } from 'contentful'

const LessonPage = ({ lesson }) => {
  const assets = lesson?.fields?.media?.content.filter(
    (asset) => asset.nodeType === 'embedded-entry-block',
  )
  // console.log(assets)
  // console.log(lesson)
  return (
    <div>
      {!!lesson && (
        <>
          <h1>{lesson.fields.section}</h1>
          <h2>{lesson.fields.title}</h2>
          {assets.map((item) => {
            const {
              data: {
                target: {
                  fields: { asset },
                },
              },
            } = item
            return (
              <div key={item.data.target.sys.id}>
                <iframe src={asset} />
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}

export default LessonPage

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: 'lesson',
  })

  const paths = res.items.map((item) => {
    return {
      params: { lesson: item.fields.slug, module: item.fields.section },
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params: { lesson } }) {
  const { items } = await client.getEntries({
    content_type: 'lesson',
    'fields.slug': lesson,
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
    props: { lesson: items[0] },
    revalidate: 1,
  }
}
