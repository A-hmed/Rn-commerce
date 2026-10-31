import {Image, ImageSourcePropType, View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeTab from "./tabs/home_tab/HomeTab.tsx";
import CategoriesTab from "./tabs/categories_tab/CategoriesTab.tsx";
import ProfileTab from "./tabs/profile_tab/ProfileTab.tsx";
import WishListTab from "./tabs/wish_list_tab/WishListTab.tsx";
import {colors} from "../../../../core/theme/colors.ts";
import {globalStyles} from "../../../common_ui/GlobalStyles.ts";

const Tab = createBottomTabNavigator();


function TabIcon({focused, source}: { focused: boolean, source: ImageSourcePropType }) {
    return (

        <View style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: focused ? 'white' : colors.blue
        }}>
            <Image source={source}
                   style={{
                       tintColor: focused ? colors.blue : 'white',
                       width: 24,
                       height: 24,
                       resizeMode: "stretch",
                   }}/>
        </View>
    )
}

export default function MainTabs() {
    return (
        <View style={{backgroundColor: "#fff", flex: 1}}>
            <Tab.Navigator
                initialRouteName={"Home"}
                screenOptions={{
                    headerShown: false, tabBarLabelVisibilityMode: "unlabeled", tabBarStyle: {
                        backgroundColor: colors.blue,
                        height: 80,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                        paddingTop: 8
                    }
                }}>
                <Tab.Screen name={"Home"} component={HomeTab} options={{
                    tabBarIcon:
                        ({focused}) => <TabIcon focused={focused}
                                                source={require("../../../../assets/images/ic_home.png")}/>
                }}/>
                <Tab.Screen name={"Categories"} component={CategoriesTab} options={{
                    tabBarIcon:
                        ({focused}) => <TabIcon focused={focused}
                                                source={require("../../../../assets/images/ic_category.png")}/>
                }}/>
                <Tab.Screen name={"WishList"} component={WishListTab} options={{
                    tabBarIcon:
                        ({focused}) => <TabIcon focused={focused}
                                                source={require("../../../../assets/images/ic_wishlist.png")}/>
                }}/>
                <Tab.Screen name={"Profile"} component={ProfileTab} options={{
                    tabBarIcon:
                        ({focused}) => <TabIcon focused={focused}
                                                source={require("../../../../assets/images/ic_profile.png")}/>
                }}/>


            </Tab.Navigator>
        </View>
)
}