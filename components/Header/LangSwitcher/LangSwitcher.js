import Switcher from './LangSwitcherStyled'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

const LangSwitcher = () => {
  const router = useRouter()
  const { locales, asPath } = router
  return (
    <Switcher>
      {locales.map((locale) => (
        <Link key={locale} href={asPath} locale={locale}>
          <a>
            <Image
              src={
                locale === 'en'
                  ? '/img/GB.svg'
                  : locale === 'pl'
                  ? '/img/PL.svg'
                  : locale === 'sl'
                  ? '/img/SL.svg'
                  : ''
              }
              alt={`${locale} flag`}
              width={24}
              height={17}
            />
          </a>
        </Link>
      ))}
    </Switcher>
  )
}

export default LangSwitcher
