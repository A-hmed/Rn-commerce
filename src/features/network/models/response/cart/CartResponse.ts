import {ProductDto} from "../product/ProductDto.ts";

export interface CartResponse {
    status: string
    numOfCartItems: number
    cartId: string
    data: CartDto
}

export interface CartDto {
    products: CartItemDto[]
    totalCartPrice: number
}

export interface CartItemDto {
    count: number
    product: ProductDto
    price: number
}