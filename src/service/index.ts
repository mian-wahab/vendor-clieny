import { User } from "@/types/user";
import { post } from "./axiosWrapper";
import { routes } from "./routes";
import { SignInWithPasswordParams } from "@/lib/auth/client";

export const Login = async (data: SignInWithPasswordParams) => {
    const user = await post(routes.auth.signIn, data);
    if (user.status) {
        const userData = user.data as User;
        localStorage.setItem('custom-auth-token', userData?.token as string);
        return { user: userData, error: null };
    }
    return { user: null, error: user.message as string };
}