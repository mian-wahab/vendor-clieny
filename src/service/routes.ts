export const routes = {
    auth: {
        signIn: '/auth/login',
        signUp: '/auth/sign-up',
    },
    dashboard: {
        vendor: {
            getAllVendor: '/vendor/getAll',
            createVendor: '/vendor/create',
            updateVendor: '/vendor/update',
            deleteVendor: '/vendor/delete',
        },
        ftp: {
            getAllFtp: '/ftp/getAll',
            createFtp:'/ftp/create',
            updateFtp:'/ftp/update'
        },
        convert: {
            uploadAndConvertFile: '/convert/uploadAndConvertFile',
        },

    },
}