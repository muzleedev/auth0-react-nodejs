import axios from 'axios'
import { getAccessToken } from '../auth/service'
import { appConfig } from 'config/appConfig'

import { LoggerFactory } from 'utils/LoggerFactory'

const logger = LoggerFactory.getLogger('DogService')

export const fetchDogs = async () => {
    try {
        const { access_token } = await getAccessToken()

        const { data } = await axios.get(`${appConfig.dogApi.baseUrl}/api/v1/dogs`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        })

        return data
    } catch (e) {
        logger.error(e, 'Could not get dogs response from Dog API')

        throw new Error('Could not get dogs response from Dog API')
    }
}
