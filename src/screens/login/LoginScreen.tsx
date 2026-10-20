import {ActivityIndicator, Button, Image, Pressable, StyleSheet, Text, View} from "react-native";
import {blue} from "../main_tabs/tabs/home_tab/HomeTab.tsx";
import {SafeAreaView} from "react-native-safe-area-context";
import AppTextField from "../../common/AppTextField.tsx";
import {isValidEmail, isValidPassword} from '../validators/validators.ts';
import React, {useState} from "react";
import {login} from "../../api/apiServices.ts";
import {useNavigation} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParams} from "../RootNavigation.tsx";
import axios from "axios";
import Toast from "react-native-toast-message";

type LoginErrors = { email?: string, password?: string }

export default function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState<LoginErrors>({email, password})
    const [loading, setLoading] = useState<boolean>(false);

    const navigation = useNavigation<NativeStackScreenProps<RootStackParams>>();

    const validate = (): boolean => {
        let isValid = true;
        let emailError = isValidEmail(email)
        if (emailError) {
            setFormErrors({email: emailError})
            isValid = false
        }
        let passwordError = isValidPassword(password)
        if (passwordError) {
            setFormErrors({password: passwordError})
            isValid = false
            return false
        }
        return isValid
    }

    const onLoginPress = async () => {
        if (!validate()) {
            return;
        }
        setLoading(true)
        try {
            await login(email, password)
            navigation.replace("MainTabs")
        } catch (error) {
            let message = ''
            if (axios.isAxiosError<ApiErrorResponse>(error)) {
                message = error.response?.data.message || "Something went wrong"
            }
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: message
            });

            console.log(error)
        } finally {
            setLoading(false)
        }


        ///call api

    }

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={{gap: 12}}>
                <Image style={styles.headerImage} source={require('../../assets/images/route_logo_large.png')}/>
                <View style={{height: "18%"}}/>
                <Text style={styles.title}>Welcome Back to route</Text>
                <Text style={styles.subTitle}>Please sign in with your mail</Text>
                <View style={{height: 18}}/>
                <AppTextField value={email}
                              error={formErrors.email}
                              onChangeText={(text) => setEmail(text)}
                              label={"Username"} placeholder={"Enter your name"}/>
                <AppTextField value={password}
                              error={formErrors.password}
                              onChangeText={(text) => setPassword(text)}
                              label={"Password"} placeholder={"Enter your password"}/>
                <Text style={styles.forgetPassword}>Forget password</Text>
                <View style={{height: 18}}/>
                <Pressable onPress={onLoginPress} style={{
                    backgroundColor: 'white',
                    paddingVertical: 12,
                    borderRadius: 12,
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    {loading ? <ActivityIndicator/> : <Text style={styles.buttonText}>Login</Text>}
                </Pressable>
                <Text style={{
                    fontSize: 18,
                    fontWeight: "semibold",
                    alignSelf: 'center',
                    color: "white"
                }}>Don't have an account? Create account</Text>

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