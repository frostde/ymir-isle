import * as React from 'react'
import Link from 'next/link'

import { Villager } from '../../../types'

type Props = {
    data: Villager
}

const ListItem = ({ data }: Props) => (
    <Link href="/users/[id]" as={`/users/${data.id}`}>
        <a>
            {data.id}: {data.name}
        </a>
    </Link>
)

export default ListItem
