import {Image, ScrollView, StyleSheet, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {SearchBarAndCartRow} from "../../../../../common_ui/components/SearchBarAndCartRow.tsx";
import {AdsCarosuel} from "./components/AdsCarosuel.tsx";
import {CategoriesSection} from "./components/CategoriesSection.tsx";
import {ProductsSection} from "./components/ProductsSection.tsx";
import {colors} from "../../../../../../core/theme/colors.ts";
import {globalStyles} from "../../../../../common_ui/GlobalStyles.ts";


function HomeTab() {
    return (
        <SafeAreaView edges={['top']}>
            <ScrollView style={{ backgroundColor: "#fff",}}>
                <View style={globalStyles.screenContainer}>
                    <Image source={require("../../../../../../assets/images/route_logo.png")}
                           style={styles.logo}/>
                    <SearchBarAndCartRow/>
                    <AdsCarosuel/>
                    <CategoriesSection/>
                    <ProductsSection/>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 12
    }
})
export default HomeTab;