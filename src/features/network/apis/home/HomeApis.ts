import {CategoryDto, CategoryResponse} from "../../models/response/category/CategoryDto.ts";
import {apiClient} from "../../../../core/api/apiServices.ts";
import {ProductDto, ProductsResponse} from "../../models/response/product/ProductDto.ts";

export async function getCategories(): Promise<CategoryDto[]> {
    const response = await apiClient.get<CategoryResponse>("categories")
    return response.data.data
}

export async function getProducts(): Promise<ProductDto[]> {
    const response = await apiClient.get<ProductsResponse>("products")
    return response.data.data
}