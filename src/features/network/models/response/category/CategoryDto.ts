import {Metadata} from "../common/MetaData.ts";

export interface CategoryDto {
    id: string;
    name: string;
    image: string;
    category?: string
}
export interface CategoryResponse {
    results: number
    metadata: Metadata
    data: CategoryDto[]
}

