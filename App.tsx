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
import HomeTab from "./src/screens/home_tab/HomeTab.tsx";
import {GestureHandlerRootView} from "react-native-gesture-handler";

function App() {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <GestureHandlerRootView>
            <SafeAreaProvider>
                <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
                <HomeTab/>
            </SafeAreaProvider>
        </GestureHandlerRootView>

    );
}

export default App;
