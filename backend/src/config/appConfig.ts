export const appConfig = {
    server: {
        port: process.env.PORT || '5000',
    },
    oAuth: {
        issuerBaseURL: process.env.ISSUER_BASE_URL || '',
        audience: process.env.AUDIENCE || '',
        tokenSigningAlg: process.env.TOKEN_SIGNING_ALG || '',
    },
}
