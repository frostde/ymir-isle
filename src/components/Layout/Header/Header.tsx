import Link from "next/dist/client/link";

const Header = () => (
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |{' '}
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
          |{' '}
          <Link href="/users">
            <a>Villagers</a>
          </Link>{' '}
          | <a href="/api/users">Users API</a>
        </nav>
      </header>
  )

export default Header