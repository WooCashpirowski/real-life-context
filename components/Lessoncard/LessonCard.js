import Card from './LessonCardStyled';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button/Button';

const LessonCard = ({ lesson, module }) => {
	console.log(lesson);
	return (
		<Card>
			<Link href={`/platform/${module.fields.slug}/${lesson.slug}`}>
				<a>
					<div className='linkWrapper'>
						<h2>{lesson.title}</h2>
						<Image
							src={`https:${lesson.thumbnail.fields.file.url}`}
							layout='fill'
							objectFit='cover'
							alt={lesson.thumbnail.fields.title}
							placeholder='blur'
							blurDataURL={`https:${lesson.thumbnail.fields.file.url}`}
						/>
					</div>
				</a>
			</Link>
			<a href={`https:${lesson.materials.fields?.file.url}`}>
				<Button text={`download materials`}>
					<i className='fas fa-download'></i>
				</Button>
			</a>
		</Card>
	);
};

export default LessonCard;
