"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
exports.formatterDate = function (date) {
    var YYYY = date.getFullYear();
    var MM = date.getMonth() + 1;
    var DD = date.getDate();
    if (MM < 10)
        MM = '0' + MM;
    if (DD < 10)
        DD = '0' + DD;
    var HH = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    if (HH < 10)
        HH = '0' + HH;
    if (mm < 10)
        mm = '0' + mm;
    if (ss < 10)
        ss = '0' + ss;
    return YYYY + "-" + MM + "-" + DD + "(" + HH + ":" + mm + ":" + ss + ")";
};
//# sourceMappingURL=utils.js.map