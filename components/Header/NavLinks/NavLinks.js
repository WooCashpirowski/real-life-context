import { Link as ScrollLink } from 'react-scroll'
import useTranslation from 'next-translate/useTranslation'

const NavLinks = () => {
  let { t } = useTranslation()
  return (
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
  )
}

export default NavLinks
