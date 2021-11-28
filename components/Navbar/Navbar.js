import Nav from './NavbarStyled'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = ({ path }) => {
  return (
    <Nav>
      <Link href={path}>
        <a>
          <i className="fas fa-long-arrow-alt-left" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <Image
            src="/img/logo.png"
            width={60}
            height={52}
            alt="rlc logo, back to homepage"
          />
        </a>
      </Link>
    </Nav>
  )
}

export default Navbar
