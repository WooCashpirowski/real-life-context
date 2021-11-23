import { useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import LangSwitcher from './LangSwitcher/LangSwitcher'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'
import Navbar from './HeaderStyled'

const Header = () => {
  let { t } = useTranslation()

  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) {
        setIsTop(false)
      } else {
        setIsTop(true)
      }
    }
    window.addEventListener('scroll', onScroll)
  }, [isTop])
  return (
    <Navbar className={isTop ? '' : 'shrink'}>
      <div>
        <nav>
          <ul>
            <ScrollLink to="about" smooth>
              <li>{t('home:header.about')}</li>
            </ScrollLink>
            <ScrollLink to="outputs" smooth>
              <li>{t('home:header.outputs')}</li>
            </ScrollLink>
            <ScrollLink to="partners" smooth>
              <li>{t('home:header.partners')}</li>
            </ScrollLink>
          </ul>
        </nav>
        <div className="logo">
          <ScrollLink to="hero" smooth>
            <Image
              src="/img/logo.png"
              layout="fill"
              objectFit="cover"
              alt="rlc logo, top of the page"
            />
          </ScrollLink>
        </div>
        <LangSwitcher />
      </div>
    </Navbar>
  )
}

export default Header
