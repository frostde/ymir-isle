import * as React from 'react'

import { Villager } from '../../../types'

type Props = {
    data: Villager
}

const ListItem = ({ data }: Props) => (
    <span>
        {data.id}: {data.name}
    </span>
)

export default ListItem
