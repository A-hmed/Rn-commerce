import {Image, StyleSheet, TextInput, View} from "react-native";
import {colors} from "../../../core/theme/colors.ts";

export function SearchBarAndCartRow() {
    return (<View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
        <View style={styles.searchContainer}>
            <Image source={require("../../../assets/images/ic_search.png")}/>

            <TextInput placeholder='What do u search for?'
                       placeholderTextColor={colors.blue} style={{color: colors.blue}}/>
        </View>
        <Image source={require("../../../assets/images/ic_cart.png")}/>
    </View>)
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        borderColor: colors.blue,
        borderWidth: 1,
        borderRadius: 24,
        paddingHorizontal: 18,
        paddingVertical: 8,
        alignItems: 'center',
        gap: 4,
        flex: 1
    },

})