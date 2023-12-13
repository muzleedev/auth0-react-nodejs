import axios from 'axios'

import { appConfig } from 'config/appConfig'
import { TokenResponse } from 'types/auth'
import { LoggerFactory } from 'utils/LoggerFactory'

const logger = LoggerFactory.getLogger('AuthService')
const authConfig = appConfig.oAuth

export const getAccessToken = async () => {
    try {
        const { data } = await axios.post<TokenResponse>(authConfig.oauthAuthServerUrl, {
            client_id: authConfig.oauthClientId,
            client_secret: authConfig.oauthClientSecret,
            audience: authConfig.audience,
            grant_type: 'client_credentials',
        })

        return data
    } catch (e: any) {
        logger.error(e, 'Could not get access token from the auth server')

        throw new Error('Could not get access token from the auth server')
    }
}
