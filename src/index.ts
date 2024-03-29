import { configure, getLogger, addLayout, Logger, LoggingEvent } from 'log4js'
import { formatterDate } from './utils'

export default class Log4jsLogger {
  protected layoutType = 'layout'
  constructor() {
    addLayout('file', (config) => formatterLogger)
  }
  init(params: {
    type?: string,
    filename: string,
    pattern?: string,
    keepFileExt?: boolean,
    compress?: boolean,
    daysToKeep?: number
  }): Logger {
    const {
      type = 'dateFile',
      filename,
      pattern = 'yyyy-MM-dd',
      keepFileExt = true,
      compress = true,
      daysToKeep = 7
    } = params;
    configure({
      appenders: {
        out: { type: 'console' },
        dateFile: {
          type, filename, layout: { type: 'file' }, pattern, keepFileExt, compress, daysToKeep,
        }
      },
      categories: { default: { appenders: ['out', 'dateFile'], level: 'all' } },
    });
    const logger = getLogger();
    return logger;
  }
}

function formatterLogger(logEvent: LoggingEvent): string {
  const time = formatterDate(logEvent.startTime)
  const { levelStr } = logEvent.level
  return time + ' ' + levelStr + ' ' + logEvent.data
}
