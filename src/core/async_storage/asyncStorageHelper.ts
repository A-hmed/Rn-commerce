import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "token-key";
export const tokenStorage = {

    save: (token: string) => AsyncStorage.setItem(TOKEN_KEY, token),

    get: () => AsyncStorage.getItem(TOKEN_KEY),

    clear: () => AsyncStorage.removeItem(TOKEN_KEY),

}