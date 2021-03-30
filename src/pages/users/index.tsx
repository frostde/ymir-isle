import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Villager } from '../../types'
import { sampleUserData } from '../../utils/sample-data'
import Layout from '../../components/Layout/Layout/Layout'
import List from '../../components/List/List/List'

type Props = {
    items: Villager[]
}

const WithStaticProps = ({ items }: Props) => (
    <Layout title="Users List | Next.js + TypeScript Example">
        <h1>Villagers List</h1>
        <List items={items} />
        <p>
            <Link href="/">
                <a>Go home</a>
            </Link>
        </p>
    </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
    // Example for including static props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    const items: Villager[] = sampleUserData
    return { props: { items } }
}

export default WithStaticProps
