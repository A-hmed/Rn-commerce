/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {StatusBar, useColorScheme} from 'react-native';
import {
    SafeAreaProvider,
} from 'react-native-safe-area-context';
import HomeTab from "./src/features/commerce/screens/main_tabs/tabs/home_tab/HomeTab.tsx";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import RootNavigation from "./src/RootNavigation.tsx";
import Toast from "react-native-toast-message";

function App() {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <>
            {<NavigationContainer>
                <GestureHandlerRootView>
                    <SafeAreaProvider>
                        {/*    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>*/}
                        {/*    <HomeTab/>*/}
                        <RootNavigation/>
                    </SafeAreaProvider>
                </GestureHandlerRootView>
            </NavigationContainer>}
            <Toast position={"bottom"}/>
        </>
    );
}

export default App;
