import { Link as ScrollLink } from 'react-scroll';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

const NavLinks = () => {
	let { t } = useTranslation();
	return (
		<ul>
			<ScrollLink to='about' smooth>
				<li>{t('home:header.about')}</li>
			</ScrollLink>
			<ScrollLink to='outputs' smooth>
				<li>{t('home:header.outputs')}</li>
			</ScrollLink>
			<ScrollLink to='partners' smooth>
				<li>{t('home:header.partners')}</li>
			</ScrollLink>
			<Link href='/platform' passHref>
				<li>{t('home:header.platform')}</li>
			</Link>
		</ul>
	);
};

export default NavLinks;
