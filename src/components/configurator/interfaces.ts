export interface CarConfigs {
    exteriorDesign: ExteriorDesign
    interiorDesign: InteriorDesign
}

export interface ExteriorDesign {
    wheelType: Item,
    primaryColor: Item,
    secondaryColor: Item,
    brakesColor: Item,
    active?: boolean
}

export interface InteriorDesign {
    leatherColor: Item,
    active?: boolean
}

export interface Item {
    value: string,
    price: number,
    code: string
}