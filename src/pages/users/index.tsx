import Link from 'next/link'

import { Villager } from '../../types'
import Layout from '../../components/Layout/Layout/Layout'
import List from '../../components/List/List/List'
import { useEffect, useState } from 'react'
import fire from '../../../config/fire-config'

var docRef = fire.firestore().collection('Villagers')

const WithStaticProps = () => {
    const [villagers, setVillagers] = useState<Villager[]>([])

    useEffect(() => {
        docRef.onSnapshot((snap) => {
            const villagers = snap.docs.map((doc) => ({
                id: doc.id,
                name: doc.data().name as string,
            }))
            setVillagers(villagers)
        })
    })

    return (
        <Layout title="Users List | Next.js + TypeScript Example">
            <h1>Villagers List</h1>
            <List items={villagers} />
            <p>
                <Link href="/">
                    <a>Go home</a>
                </Link>
            </p>
        </Layout>
    )
}

export default WithStaticProps
