import * as React from 'react'
import ListItem from '../ListItem/ListItem'
import { Villager } from '../../../types'

type Props = {
    items: Villager[]
}

const List = ({ items }: Props) => (
    <ul>
        {items.map((item) => (
            <li key={item.id}>
                <ListItem data={item} />
            </li>
        ))}
    </ul>
)

export default List
