import Link from 'next/dist/client/link'

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
        </nav>
    </header>
)

export default Header
