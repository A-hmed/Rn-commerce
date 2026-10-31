import {ActivityIndicator, FlatList, Image, StyleSheet, Text, View} from "react-native";
import {ProductDto} from "../../../../../../network/models/response/product/ProductDto.ts";
import {colors} from "../../../../../../../core/theme/colors.ts";
import {useEffect, useState} from "react";
import {getProducts} from "../../../../../../network/apis/home/HomeApis.ts";

export function ProductsSection() {
    const [products, setProducts] = useState<ProductDto[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setLoading(true)
        getProducts().then(setProducts).catch((error) => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [])
    return (<View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 8}}>
            <Text style={{color: colors.blue}}>Products</Text>
            <Text style={{color: colors.blue}}>View all</Text>
        </View>
        {loading && <ActivityIndicator/>}
        {error && <Text>Something went wrong.</Text>}
        {(products.length > 1) && <ProductsList products={products}/>}
    </View>)
}

function ProductsList({products}: { products: ProductDto[] }) {
    return (<FlatList
        horizontal={true}
        data={products}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <ProductItem product={item}/>}
        keyExtractor={(item, index) => item.id.toString()}
    />)

}

function ProductItem({product}: { product: ProductDto }) {
    return (<View style={{
        borderRadius: 16,
        // borderColor: '#0041824D',
        width: 190,
        marginHorizontal: 8,
        marginTop: 16,
        borderWidth: 1,
        paddingBottom: 8
    }}>
        <Image source={{uri: product.imageCover}}
               style={{width: '100%', height: 120, borderTopLeftRadius: 16, borderTopRightRadius: 16}}/>
        <View style={{marginHorizontal: 8, gap: 8}}>
            <Text style={{color: colors.blue,}} numberOfLines={2}>{product.title}</Text>
            <Text style={{color: colors.blue}}>EGP {product.price}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center',}}>
                <Text style={{color: colors.blue, verticalAlign: "middle"}}>Review ({product.ratingsAverage})</Text>
                <Text style={{
                    color: 'white',
                    backgroundColor: colors.blue,
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    textAlign: 'center',
                    verticalAlign: "middle",
                    fontSize: 18
                }}>+</Text>
            </View>
        </View>

        <Image style={{position: 'absolute', right: 0}}
               source={require("../../../../../../../assets/images/ic_favorite.png")}/>

    </View>)
}