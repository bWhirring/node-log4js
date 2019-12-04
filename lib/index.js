"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log4js_1 = require("log4js");
var utils_1 = require("./utils");
var Log4jsLogger = /** @class */ (function () {
    function Log4jsLogger() {
        this.layoutType = 'layout';
        log4js_1.addLayout('file', function (config) { return formatterLogger; });
    }
    Log4jsLogger.prototype.init = function (params) {
        var _a = params.type, type = _a === void 0 ? 'dateFile' : _a, filename = params.filename, _b = params.pattern, pattern = _b === void 0 ? 'yyyy-MM-dd' : _b, _c = params.keepFileExt, keepFileExt = _c === void 0 ? true : _c, _d = params.compress, compress = _d === void 0 ? true : _d, _e = params.daysToKeep, daysToKeep = _e === void 0 ? 7 : _e;
        log4js_1.configure({
            appenders: {
                out: { type: 'console' },
                dateFile: {
                    type: type, filename: filename, layout: { type: 'file' }, pattern: pattern, keepFileExt: keepFileExt, compress: compress, daysToKeep: daysToKeep,
                }
            },
            categories: { default: { appenders: ['out', 'dateFile'], level: 'all' } },
        });
        var logger = log4js_1.getLogger();
        return logger;
    };
    return Log4jsLogger;
}());
function formatterLogger(logEvent) {
    var time = utils_1.formatterDate(logEvent.startTime);
    var levelStr = logEvent.level.levelStr;
    return time + ' ' + levelStr + ' ' + logEvent.data;
}
var logger = new Log4jsLogger().init({ filename: '11.log' });
logger.debug("Some debug DEBUG Some debug messagesDEBUG Some debug messagesDEBUG Some debug messagesDEBUG Some debug messagesDEBUG Some debug messagesDEBUG Some debug messagesDEBUG Some debug messagesDEBUG Some debug messagesDEBUG Some debug messages");
logger.info('1212', 1121);
//# sourceMappingURL=index.js.map