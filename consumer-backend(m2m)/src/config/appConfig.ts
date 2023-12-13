export const appConfig = {
    server: {
        port: process.env.PORT || '5001',
    },
    dogApi: {
        baseUrl: process.env.DOG_API_BASE_URL,
    },
    oAuth: {
        oauthAuthServerUrl: process.env.OAUTH_AUTH_SERVER_URL || '',
        oauthClientId: process.env.OAUTH_CLIENT_ID || '',
        oauthClientSecret: process.env.OAUTH_CLIENT_SECRET || '',
        audience: process.env.AUDIENCE || '',
    },
}
