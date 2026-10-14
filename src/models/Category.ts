export interface Category {
    id: string;
    name: string;
    image: string;
}

let imageUrl = "https://dfcdn.defacto.com.tr/cms/85aa74c67739432f9e305d50475513f5.jpg"

export const categories: Category[] = [
    {id: 1, image: imageUrl, name: "Mens category1"},
    {id: 2, image: imageUrl, name: "Mens category2"},
    {id: 3, image: imageUrl, name: "Mens category3"},
    {id: 4, image: imageUrl, name: "Mens category4"},
    {id: 5, image: imageUrl, name: "Mens category5"},
    {id: 6, image: imageUrl, name: "Mens category6"},
    {id: 7, image: imageUrl, name: "Mens category7"},
]
// console.log(categories.slice(6, 8))
    // [['1', '2'], ['3', '4'], ['5', '6']]
const categories2 = [
    [
        {id: 1, image: imageUrl, name: "Mens category1"},
        {id: 2, image: imageUrl, name: "Mens category2"}],
    [{id: 2, image: imageUrl, name: "Mens category2"},
        {id: 3, image: imageUrl, name: "Mens category3"},]


]