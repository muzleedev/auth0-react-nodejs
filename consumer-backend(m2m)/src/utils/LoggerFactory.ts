import { pino } from 'pino'

export class LoggerFactory {
    private static readonly baseLogger = pino({
        transport: {
            target: 'pino-pretty',
            options: {
                colorize: true,
                ignore: 'pid,hostname',
                translateTime: 'SYS:standard',
            },
        },
    })

    public static getLogger(loggerName: string) {
        return LoggerFactory.baseLogger.child({ name: loggerName })
    }
}
