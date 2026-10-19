import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "./login/LoginScreen.tsx";
import MainTabs from "./main_tabs/MainTabs.tsx";


export type RootStackParams = {
    Login: undefined;
    Main: undefined;
}
const Stack = createNativeStackNavigator<RootStackParams>()


export default function RootNavigation() {
    return (<Stack.Navigator initialRouteName={"Login"} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"Login"} component={LoginScreen}/>
        <Stack.Screen name={"MainTabs"} component={MainTabs}/>
    </Stack.Navigator>)
}