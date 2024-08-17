export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard',
    account: '/dashboard/account',
    vendors: '/dashboard/vendors',
    // integrations: '/ dashboard/integrations',
    // settings: '/dashboard/settings',
    // vendor: '/dashboard/vendor',
  },
  errors: { notFound: '/errors/not-found' },
} as const;
