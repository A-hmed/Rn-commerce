import {tokenStorage} from "../../../../core/async_storage/asyncStorageHelper.ts";
import {apiClient} from "../../../../core/api/apiServices.ts";
import {AuthResponse} from "../../models/response/auth/authResponse.ts";

export async function login(email: string, password: string): Promise<any> {
    const response = await apiClient.post<AuthResponse>("auth/signin", {email, password});
    if (response.data.token) {
        await tokenStorage.save(response.data.token);
    }
    return response.data;
}