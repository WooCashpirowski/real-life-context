import Output from './Output/Output';
import OutputsStyled from './OutputsStyled';
import _ from 'lodash';

const Outputs = ({ locale, outputs, ebook }) => {
	const heading = _.get(outputs, `${locale}Heading`);
	const eBook = _.get(outputs, `${locale}Ebook`);
	const materials = _.get(outputs, `${locale}Materials`);
	const modules = _.get(outputs, `${locale}Modules`);
	const platform = _.get(outputs, `${locale}Platform`);

	const eBookWithUrl = {
		...eBook,
		...ebook,
	};

	return (
		<OutputsStyled id='outputs'>
			<h1 className='heading'>{heading}</h1>
			<div className='outputsWrapper'>
				<Output output={eBookWithUrl} />
				<Output output={materials} />
				<Output output={modules} />
				<Output output={platform} link={'/platform'} />
			</div>
		</OutputsStyled>
	);
};

export default Outputs;
