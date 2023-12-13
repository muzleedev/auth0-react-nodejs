import 'dotenv/config'
import { app } from './app'
import { appConfig } from 'config/appConfig'
import { LoggerFactory } from 'utils/LoggerFactory'

const logger = LoggerFactory.getLogger('Server')
const serverPort = appConfig.server.port

app.listen(serverPort, () => {
    logger.info(`Server is running on port ${serverPort}`)
})
