export type Resident = {
    id: number // TODO: refactor this to be a guid
    name: string
    birthdate?: string // TODO: refactor this to be a DateTime
}

export type Villager = Resident

export type Player = Resident

export type ShopOwner = Resident

export type Building = {
    name: string
    description: string
    owner: ShopOwner[]
}
