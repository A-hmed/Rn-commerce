import {Button, Image, Pressable, StyleSheet, Text, View} from "react-native";
import {blue} from "../main_tabs/tabs/home_tab/HomeTab.tsx";
import {SafeAreaView} from "react-native-safe-area-context";
import AppTextField from "../../common/AppTextField.tsx";


export default function LoginScreen() {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={{gap: 12}}>
                <Image style={styles.headerImage} source={require('../../assets/images/route_logo_large.png')}/>
                <View style={{height: "18%"}}/>
                <Text style={styles.title}>Welcome Back to route</Text>
                <Text style={styles.subTitle}>Please sign in with your mail</Text>
                <View style={{height: 18}}/>
                <AppTextField label={"Username"} placeholder={"Enter your name"}/>
                <AppTextField label={"Password"} placeholder={"Enter your password"}/>
                <Text style={styles.forgetPassword}>Forget password</Text>
                <View style={{height: 18}}/>
                <Pressable style={{backgroundColor: 'white',
                    paddingVertical: 12,
                    borderRadius: 12,
                    justifyContent:'center', alignItems: 'center'}}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
                <Text style={{fontSize: 18,
                    fontWeight: "semibold",
                    alignSelf: 'center',
                    color: "white"}}>Don't have an account? Create account</Text>

            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: blue,
        padding: 16,
    },
    headerImage: {
        alignSelf: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "semibold",
        color: "white"
    },
    subTitle: {
        fontSize: 14,
        fontWeight: "semibold",
        color: "white",
    },
    forgetPassword: {
        fontSize: 14,
        fontWeight: "semibold",
        color: "white",
        alignSelf: 'flex-end',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: blue,
    },

})
// initState(){}
// dispose(){}