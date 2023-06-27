import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import SidebarStyled from './SidebarStyled';
import useTranslation from 'next-translate/useTranslation';
import LangSwitcher from '../LangSwitcher/LangSwitcher';

const Sidebar = ({ isExpanded, setIsExpanded }) => {
	let { t } = useTranslation();
	return (
		<SidebarStyled className={isExpanded ? 'expanded' : ''}>
			<ul>
				<ScrollLink
					to='about'
					smooth
					onClick={() => setIsExpanded(!isExpanded)}
				>
					<li>{t('home:header.about')}</li>
				</ScrollLink>
				<ScrollLink
					to='outputs'
					smooth
					onClick={() => setIsExpanded(!isExpanded)}
				>
					<li>{t('home:header.outputs')}</li>
				</ScrollLink>
				<ScrollLink
					to='partners'
					smooth
					onClick={() => setIsExpanded(!isExpanded)}
				>
					<li>{t('home:header.partners')}</li>
				</ScrollLink>
				<Link href='/platform' passHref>
					<li>{t('home:header.platform')}</li>
				</Link>
			</ul>
			<LangSwitcher />
		</SidebarStyled>
	);
};

export default Sidebar;
