import {FlatList, Image, ScrollView, StyleSheet, Text, TextInput, useWindowDimensions, View} from "react-native";
import {categories, Category} from "../../models/Category.ts";

import {mockProducts, Product} from "../../models/Product.ts";
import {Carousel} from "react-native-reanimated-carousel";

// Text -> Text
// Button - Button
// Images - Image
// Column - Row - Stack -> View
// ListView.builder -> Flatlist
// SingleChildScrollView -> ScrollView
//TextField -> TextInput
const blue = '#004182'

function HomeTab() {
    return (
        <ScrollView>
            <View style={styles.screenContainer}>
                <Image source={require("../../assets/images/route_logo.png")}
                       style={styles.logo}/>
                <SearchBarAndCartRow/>
                <AdsCarosuel/>
                <Categories/>
                <ProductsSection/>
            </View>
        </ScrollView>
      )
}

function SearchBarAndCartRow() {
    return (<View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
        <View style={styles.searchContainer}>
            <Image source={require("../../assets/images/ic_search.png")}/>

            <TextInput placeholder='What do u search for?'
                       placeholderTextColor={blue} style={{color: blue}}/>
        </View>
        <Image source={require("../../assets/images/ic_cart.png")}/>
    </View>)
}

const ads = [
    require("../../assets/images/ads_img.png"),
    require("../../assets/images/ads_img.png"),
    require("../../assets/images/ads_img.png"),
]

function AdsCarosuel() {
    const {width} = useWindowDimensions();
    return (<Carousel
        style={{height: 200, width}}
        data={ads}
        autoplay={true}
        autoplayInterval={2000}
        renderItem={({item}) => (
            <View style={{alignItems: "center", justifyContent: "center", }}>
                <Image style={{marginHorizontal: 16, padding:16}} source={item}/>
            </View>
        )}
    />)
}

function Categories() {
    let cateogryPairs: Category[][] = [];
    for (let i = 0; i < categories.length; i += 2) {
        cateogryPairs.push(categories.slice(i, i + 2))
    }

    return (<View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 8}}>
            <Text style={{color: blue}}>Categories</Text>
            <Text style={{color: blue}}>View all</Text>
        </View>
        <FlatList
            horizontal={true}
            data={cateogryPairs}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <View style={{gap: 8}}>
                {item.map((category) => <CategoryItem id={category.id} name={category.name} image={category.image}/>)}

            </View>}
            keyExtractor={(item, index) => index.toString()}
        />
    </View>)
}

function CategoryItem({name, image}: Category) {
    return (<View style={{marginHorizontal: 16}}>
        <Image source={require("../../assets/images/ads_img.png")} style={{width: 100, height: 100, borderRadius: 50}}/>
        <Text style={{color: blue}}>{name}</Text>
    </View>)
}

function ProductsSection() {
    return (<View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 8}}>
            <Text style={{color: blue}}>Products</Text>
            <Text style={{color: blue}}>View all</Text>
        </View>
        <FlatList
            horizontal={true}
            data={mockProducts}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <ProductItem product={item}/>}
            keyExtractor={(item, index) => index.toString()}
        />
    </View>)
}

function ProductItem({product}: { product: Product }) {
    return (<View style={{
        borderRadius: 16,
        // borderColor: '#0041824D',
        width: 190,
        marginHorizontal: 8,
        marginTop: 16,
        borderWidth: 1,
        paddingBottom: 8
    }}>
        <Image source={require("../../assets/images/product_img.jpg")}
               style={{width: '100%', height: 120, borderTopLeftRadius: 16, borderTopRightRadius: 16}}/>
        <View style={{marginHorizontal: 8, gap: 8}}>
            <Text style={{color: blue,}} numberOfLines={2}>{product.name}</Text>
            <Text style={{color: blue}}>EGP {product.price}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center',}}>
                <Text style={{color: blue, verticalAlign: "middle"}}>Review ({product.rating})</Text>
                <Text style={{
                    color: 'white',
                    backgroundColor: blue,
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    textAlign: 'center',
                    verticalAlign: "middle",
                    fontSize: 18
                }}>+</Text>
            </View>
        </View>

        <Image style={{position: 'absolute', right: 0}} source={require("../../assets/images/ic_favorite.png")}/>

    </View>)
}

const styles = StyleSheet.create({
    screenContainer: {
        margin: 16,
        flex: 1,
        gap: 18
    },
    searchContainer: {
        flexDirection: 'row',
        borderColor: blue,
        borderWidth: 1,
        borderRadius: 24,
        paddingHorizontal: 18,
        paddingVertical: 8,
        alignItems: 'center',
        gap: 4,
        flex: 1
    },
    logo: {
        marginTop: 12
    }
})
export default HomeTab;