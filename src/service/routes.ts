export const routes = {
    auth: {
        signIn: '/sign-in',
        signUp: '/sign-up',
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