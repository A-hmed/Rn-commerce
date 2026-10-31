import {Image, useWindowDimensions, View} from "react-native";
import {Carousel} from "react-native-reanimated-carousel";

const ads = [
    require("../../../../../../../assets/images/ads_img.png"),
    require("../../../../../../../assets/images/ads_img.png"),
    require("../../../../../../../assets/images/ads_img.png"),
]

export function AdsCarosuel() {
    const {width} = useWindowDimensions();
    const fullWidth = width - 32
    return (<Carousel
        style={{height: 200, width: fullWidth}}
        data={ads}
        autoplay={true}
        autoplayInterval={2000}
        renderItem={({item}) => (
            <View style={{alignItems: "center", justifyContent: "center",}}>
                <Image style={{marginHorizontal: 16, padding: 16, width: fullWidth - 16}} source={item}/>
            </View>
        )}
    />)
}