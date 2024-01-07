import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import SidebarStyled from './SidebarStyled';
import useTranslation from 'next-translate/useTranslation';
import LangSwitcher from '../LangSwitcher/LangSwitcher';

const Sidebar = ({ isExpanded, setIsExpanded }) => {
	const { t } = useTranslation('home');
	return (
		<SidebarStyled className={isExpanded ? 'expanded' : ''}>
			<ul>
				<ScrollLink
					to='about'
					smooth
					onClick={() => setIsExpanded(!isExpanded)}
				>
					<li>{t('header.about')}</li>
				</ScrollLink>
				<ScrollLink
					to='outputs'
					smooth
					onClick={() => setIsExpanded(!isExpanded)}
				>
					<li>{t('header.outputs')}</li>
				</ScrollLink>
				<ScrollLink
					to='partners'
					smooth
					onClick={() => setIsExpanded(!isExpanded)}
				>
					<li>{t('header.partners')}</li>
				</ScrollLink>
				<Link href='/platform' passHref>
					<li>{t('header.platform')}</li>
				</Link>
			</ul>
			<LangSwitcher />

			<a
				className='surveyLink'
				href='https://forms.gle/CphVtDuDhVgko1DX8'
				target='_blank'
				rel='noreferrer'
			>
				{t('header.survey')}
			</a>
		</SidebarStyled>
	);
};

export default Sidebar;
