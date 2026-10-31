import {StyleSheet, Text, TextInput, TextInputProps, View} from "react-native";

type AppTextFieldProps = TextInputProps & { label: string, error?: string }


export default function AppTextField({label, error, ...inputProps}: AppTextFieldProps) {
    if (error) {

    }
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput {...inputProps} style={[styles.textInput, error ? styles.errorInput : null]}/>
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    )

}

const styles = StyleSheet.create({
    label: {fontSize: 18, color: "white", fontWeight: '500'},
    textInput: {backgroundColor: 'white', borderRadius: 18, paddingHorizontal: 16, height: 50, marginTop: 16},
    errorText: {fontSize: 12, color: "red", fontWeight: '400', marginTop: 6, marginStart: 6},
    errorInput: {borderColor: 'red', borderWidth: 1}
})
