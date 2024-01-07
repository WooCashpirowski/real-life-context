import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import useTranslation from 'next-translate/useTranslation';

import LangSwitcher from './LangSwitcher/LangSwitcher';
import Navbar from './HeaderStyled';
import NavLinks from './NavLinks/NavLinks';
import BurgerNav from './BurgerNav/BurgerNav';
import Sidebar from './Sidebar/Sidebar';

const Header = () => {
	const { t } = useTranslation('home');

	const [isTop, setIsTop] = useState(true);
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 300) {
				setIsTop(false);
			} else {
				setIsTop(true);
			}
		};
		window.addEventListener('scroll', onScroll);
	}, [isTop]);
	return (
		<Navbar className={isTop ? '' : 'shrink'}>
			<div className='barWrapper'>
				<nav className='desktopNav'>
					<NavLinks />
				</nav>
				<div className='logo'>
					<ScrollLink to='hero' smooth>
						<Image
							src='/img/logo.png'
							layout='fill'
							objectFit='cover'
							alt='rlc logo, top of the page'
						/>
					</ScrollLink>
				</div>
				<div className='switcherWrapper'>
					<a
						className='surveyLink'
						href='https://forms.gle/CphVtDuDhVgko1DX8'
						target='_blank'
						rel='noreferrer'
					>
						{t('header.survey')}
					</a>
					<LangSwitcher />
				</div>
				<BurgerNav
					isExpanded={isExpanded}
					setIsExpanded={setIsExpanded}
				/>
				<Sidebar
					isExpanded={isExpanded}
					setIsExpanded={setIsExpanded}
				/>
			</div>
		</Navbar>
	);
};

export default Header;
