export interface IRaiting {
    rate: number,
    count: number
}

export interface IItem {
    id: number | null,
    title: string | null,
    price: number | null,
    description: string | null, 
    category: string|  null,
    image: string | null,
    rating: IRaiting| null
}




