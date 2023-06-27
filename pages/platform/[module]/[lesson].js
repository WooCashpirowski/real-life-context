import { createClient } from 'contentful';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Layout from '../../../components/Layout/Layout';
import LessonWrapper from '../../../components/LessonWrapper/LessonWrapper';

const LessonPage = ({ lesson }) => {
	const assets = lesson?.fields?.media?.content.filter(
		(asset) => asset.nodeType === 'embedded-entry-block'
	);
	const [activeContent, setActiveContent] = useState('');

	return (
		<>
			{!!lesson && !!assets && (
				<Layout path={`/platform/${lesson.fields.section}`}>
					<h1 className='lessonHeading'>{lesson.fields.title}</h1>
					<LessonWrapper>
						<div className='buttons'>
							{assets.map((item) => (
								<button
									data-id={item.data.target.fields.id}
									key={item.data.target.sys.id}
									onClick={() => setActiveContent(item.data.target.fields.id)}
									className={
										item.data.target.fields.id == activeContent && 'active'
									}
								>
									{item.data.target.fields.id}
								</button>
							))}
						</div>
						{assets.map((item) => (
							<>
								{item.data.target.fields.id == activeContent && (
									<div
										className={
											item.data.target.fields.asset.includes('ic-english.eu')
												? 'quiz_media'
												: 'media'
										}
										key={item.data.target.fields.id}
									>
										<iframe src={item.data.target.fields.asset} />
									</div>
								)}
							</>
						))}
					</LessonWrapper>
				</Layout>
			)}
		</>
	);
};

export default LessonPage;

LessonPage.propTypes = {
	lesson: PropTypes.object,
};

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
	const res = await client.getEntries({
		content_type: 'lesson',
	});

	const paths = res.items.map((item) => {
		return {
			params: { lesson: item.fields.slug, module: item.fields.section },
		};
	});

	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps({ params: { lesson } }) {
	const { items } = await client.getEntries({
		content_type: 'lesson',
		'fields.slug': lesson,
	});

	if (!items.length) {
		return {
			redirect: {
				destination: '/platform',
				permanent: false,
			},
		};
	}

	return {
		props: { lesson: items[0] },
		revalidate: 1,
	};
}
