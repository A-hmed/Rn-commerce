import {CategoryDto} from "../category/CategoryDto.ts";
import {Metadata} from "../common/MetaData.ts";

export interface ProductDto {
    sold?: number
    images?: string[]
    subcategory: CategoryDto[]
    ratingsQuantity?: number
    title: string
    description?: string
    quantity: number
    price?: number
    imageCover: string
    category: CategoryDto
    brand: CategoryDto
    ratingsAverage: number
    id: string
    priceAfterDiscount?: number
    availableColors?: any[]
}

export interface ProductsResponse {
    results: number
    metadata: Metadata
    data: ProductDto[]
}