import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import useTranslation from 'next-translate/useTranslation';

import HeroStyled from './HeroStyled';
import Button from '../Button/Button';

const Hero = ({ hero }) => {
	const { t } = useTranslation('home');

	const {
		bg: {
			fields: { file: bg },
		},
		thumb: {
			fields: { file: thumb },
		},
		title: {
			fields: { file: title },
		},
		erasmusIcon: {
			fields: { file: erasmusIcon },
		},
		slogan,
	} = hero;

	return (
		<HeroStyled id='hero'>
			<Image
				src={`https:${bg.url}`}
				alt='hero background'
				layout='fill'
				objectFit='cover'
				placeholder='blur'
				blurDataURL={`https:${thumb.url}`}
			/>
			<div className='titleWrapper'>
				<Image
					src={`https:${title.url}`}
					alt='Real Life Context'
					width={title.details.image.width}
					height={title.details.image.height}
				/>
			</div>
			<p className='slogan'>{slogan}</p>
			<ScrollLink to='about' smooth style={{ zIndex: 1 }}>
				<Button style='big' text={t('hero.read-more')} />
			</ScrollLink>
			<div className='erasmusIconWrapper'>
				<Image
					src={`https:${erasmusIcon.url}`}
					alt='erasmus plus icon'
					width={erasmusIcon.details.image.width}
					height={erasmusIcon.details.image.height}
				/>
			</div>
		</HeroStyled>
	);
};

export default Hero;
