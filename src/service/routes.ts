export const routes = {
    auth: {
        signIn: '/auth/login',
        signUp: '/auth/sign-up',
    },
    dashboard: {
        vendor: {
            getAllVendor: '/vendor/getAll',
            createVendor: '/vendor/create',
            updateVendor: '/vendor/update/:id',
            deleteVendor: '/vendor/delete/:id',
        },
    },
}