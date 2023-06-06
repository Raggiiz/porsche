export interface CarConfigs {
    exteriorDesign: ExteriorDesign
    interiorDesign: InteriorDesign
}

export interface ExteriorDesign {
    wheel: "originalWheel" | "wheelExtra" | "wheelExtra2",
    primaryColor: string,
    secondaryColor: string,
    brakesColor: string,
    active?: boolean
}

export interface InteriorDesign {
    interiorColor: string,
    active?: boolean
}