import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "./login/LoginScreen.tsx";
import MainTabs from "./main_tabs/MainTabs.tsx";
import {useEffect, useState} from "react";
import {tokenStorage} from "../core/async_storage/asyncStorageHelper.ts";
import {ActivityIndicator, View} from "react-native";


export type RootStackParams = {
    Login: undefined;
    MainTabs: undefined;
}
const Stack = createNativeStackNavigator<RootStackParams>()


export default function RootNavigation() {
    const [initialRoute, setInitialRouteName] = useState<keyof RootStackParams | null>(null);
    useEffect(() => {
        tokenStorage.get().then((token) => {
            console.log(`Token = ${token}`)
            if (token) {
                console.log(`Setting route to main`)
                setInitialRouteName('MainTabs');
            } else {
                console.log(`Setting route to login`)
                setInitialRouteName('Login');
            }
        }).catch((error) => {
            console.log(`error = ${error}`)
            setInitialRouteName('Login');
        })
    }, [])

    console.log(`35- RootNavigation ${initialRoute}`)
    if (!initialRoute) {
        return (
            <View>
                <ActivityIndicator/>
            </View>
        );

    }

    return (<Stack.Navigator initialRouteName={initialRoute!} screenOptions={{headerShown: false}}>
        <Stack.Screen name={"Login"} component={LoginScreen}/>
        <Stack.Screen name={"MainTabs"} component={MainTabs}/>

    </Stack.Navigator>)
}