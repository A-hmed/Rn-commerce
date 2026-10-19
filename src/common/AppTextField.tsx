import {StyleSheet, Text, TextInput, TextInputProps, View} from "react-native";

type AppTextFieldProps = TextInputProps & { label: string, error?: string }


export default function AppTextField({label, error, ...inputProps}: AppTextFieldProps) {
    return (
        <View >
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput {...inputProps} style={styles.textInputStyle}/>
        </View>
    )

}

const styles = StyleSheet.create({
    labelStyle: {fontSize: 18, color: "white", fontWeight: '500'},
    textInputStyle: {backgroundColor: 'white', borderRadius: 18, paddingHorizontal: 16, height: 50, marginTop: 16}
})
