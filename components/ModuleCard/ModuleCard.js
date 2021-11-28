import Card from './ModuleCardStyled'
import Link from 'next/link'
import Image from 'next/image'

const ModuleCard = ({ module }) => {
  return (
    <Card module={module}>
      <Link href={`/platform/${module.fields.slug}`} key={module.sys.id}>
        <a>
          <div className="wrapper">
            <h2>Module {module.fields.id}</h2>
            <div className="imageWrapper">
              <Image
                src={`https:${module.fields.thumbnail.fields.file.url}`}
                alt="module thumbnail"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3>{module.fields.desc}</h3>
          </div>
        </a>
      </Link>
    </Card>
  )
}

export default ModuleCard
