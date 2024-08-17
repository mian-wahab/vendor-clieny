import { User } from "@/types/user";
import { get, post } from "./axiosWrapper";
import { routes } from "./routes";
import { SignInWithPasswordParams } from "@/lib/auth/client";

export const Login = async (data: SignInWithPasswordParams) => {
    const user = await post(routes.auth.signIn, data);
    if (user.status) {
        const userData = user.data as any;
        localStorage.setItem('custom-auth-token', userData?.data?.token as string);
        return { user: userData, error: null };
    }
    return { user: null, error: user.message as string };
}

//  Manage vendors
export const AddVendor = async (data: any) => {
    const vendor = await post(routes.dashboard.vendor.createVendor, data);
    if (vendor.status) {
        return { vendor: vendor.data, error: null };
    }
    return { vendor: null, error: vendor.message as string };
}

export const GetVendors = async () => {
    const vendors = await get(routes.dashboard.vendor.getAllVendor);
    if (vendors.status) {
        return { vendors: vendors.data as any, error: null };
    }
    return { vendors: null, error: vendors.message as string };
}