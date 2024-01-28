import { createClient } from 'contentful';
import Layout from '../../components/Layout/Layout';
import Grid from '../../components/Grid/Grid';
import ModuleCard from '../../components/ModuleCard/ModuleCard';
import Subsection from '../../components/Subsection/Subsection';
import Button from '../../components/Button/Button';

const PlatformPage = ({ modules, ebook }) => {
	return (
		<Layout>
			<Grid>
				{modules
					.map((module) => (
						<ModuleCard key={module.sys.id} module={module} />
					))
					.reverse()}
			</Grid>
			<Subsection>
				<a href={`https:${ebook.fields.file.url}`} target='blank'>
					<Button text={`trainer's manual`}>
						<i className='fas fa-book-open transparent'></i>
					</Button>
				</a>
				<a
					href='https://ic-english.eu/platforma/'
					target='_blank'
					rel='noreferrer'
				>
					more quizzes and multimedia
					<i className='fas fa-long-arrow-alt-right'></i>
				</a>
			</Subsection>
		</Layout>
	);
};

export default PlatformPage;

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	});

	const modulesRes = await client.getEntries({
		content_type: 'module',
	});
	const ebookRes = await client.getEntries({
		content_type: 'eBook',
	});

	return {
		props: {
			modules: modulesRes.items,
			ebook: ebookRes.items[0].fields.file,
		},
		revalidate: 1,
	};
}
