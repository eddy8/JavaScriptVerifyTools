/**
 * JS校验工具集
 *
 * @author Eddy <cumtsjh@163.com>
 */
(function (factory) {
    var registeredInModuleLoader = false;
    if (typeof define === 'function' && define.amd) {
        define(factory);
        registeredInModuleLoader = true;
    }
    if (typeof exports === 'object') {
        module.exports = factory();
        registeredInModuleLoader = true;
    }
    if (!registeredInModuleLoader) {
        var OldVerify = window.Verify;
        var api = window.Verify = factory();
        api.noConflict = function () {
            window.Verify = OldVerify;
            return api;
        };
    }
}(function () {
    var api = {
        // 是否为手机号
        isMobileNumber: function (mobile) {
            var reg_mobile =/(^(13\d|14[57]|15[^4\D]|17[13678]|18\d)\d{8}|170[^346\D]\d{7})$/;
            if(reg_mobile.test(mobile)){
                return true;
            }
            return false;
        },
        // 是否为Email RFC 2822 (simplified)
        isEmail: function (email) {
            var reg_email =/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;
            if(reg_email.test(email)){
                return true;
            }
            return false;
        },
    };
    return api;
}));