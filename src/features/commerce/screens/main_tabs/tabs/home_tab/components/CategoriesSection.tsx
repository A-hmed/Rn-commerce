import {CategoryDto} from "../../../../../../network/models/response/category/CategoryDto.ts";
import {ActivityIndicator, FlatList, Image, Text, View} from "react-native";
import {useEffect, useState} from "react";
import {getCategories} from "../../../../../../network/apis/home/HomeApis.ts";
import {colors} from "../../../../../../../core/theme/colors.ts";

export function CategoriesSection() {
    const [categories, setCategories] = useState<CategoryDto[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setLoading(true)
        getCategories().then(setCategories).catch((error) => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [])
    return (<View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 8}}>
            <Text style={{color: colors.blue}}>Categories</Text>
            <Text style={{color: colors.blue}}>View all</Text>
        </View>
        {loading && <ActivityIndicator/>}
        {error && <Text>Something went wrong.</Text>}
        {(categories.length > 1) && <CategoriesList categories={categories}/>}
    </View>)
}

function CategoriesList({categories}: { categories: CategoryDto[] }) {
    let cateogryPairs: CategoryDto[][] = [];
    for (let i = 0; i < categories.length; i += 2) {
        cateogryPairs.push(categories.slice(i, i + 2))
    }

    return (<FlatList
        horizontal={true}
        data={cateogryPairs}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <View style={{gap: 8}}>
            {item.map((category) => <CategoryItem id={category.id} name={category.name} image={category.image}/>)}

        </View>}
        keyExtractor={(item, index) => index.toString()}
    />)
}

function CategoryItem({name, image}: CategoryDto) {
    return (<View style={{marginHorizontal: 16}}>
        <Image source={{uri: image}}
               style={{width: 100, height: 100, borderRadius: 50}}/>
        <Text style={{color: colors.blue, textAlign: "center"}}>{name}</Text>
    </View>)
}