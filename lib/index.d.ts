import { Logger } from 'log4js';
export default class Log4jsLogger {
    protected layoutType: string;
    constructor();
    init(params: {
        type?: string;
        filename: string;
        pattern?: string;
        keepFileExt?: boolean;
        compress?: boolean;
        daysToKeep?: number;
    }): Logger;
}
