(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.svform = global.ng.svform || {}),global.ng.core,global.ng.forms));
}(this, (function (exports,_angular_core,_angular_forms) { 'use strict';

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Server side validated form.
 *
 * @author Eduardo Elias Saleh
 */
var SVFormGroup = /** @class */ (function (_super) {
    __extends$1(SVFormGroup, _super);
    function SVFormGroup(fgroup) {
        return _super.call(this, fgroup.controls, fgroup.validator, fgroup.asyncValidator) || this;
    }
    /**
     * Receives errors from the modelstate and print them
     * @param response http call response
     */
    /**
       * Receives errors from the modelstate and print them
       * @param response http call response
       */
    SVFormGroup.prototype.setFromModelState = /**
       * Receives errors from the modelstate and print them
       * @param response http call response
       */
    function (response) {
        if (response.error && response.error.ModelState) {
            var validationErrorDictionary = response.error.ModelState;
            for (var fieldName in validationErrorDictionary) {
                if (validationErrorDictionary.hasOwnProperty(fieldName)) {
                    if (this.controls[fieldName]) {
                        this.controls[fieldName].setErrors(validationErrorDictionary[fieldName]);
                    }
                    else {
                        this.setErrors(Object.assign(this.errors, validationErrorDictionary[fieldName]));
                    }
                }
            }
        }
    };
    return SVFormGroup;
}(_angular_forms.FormGroup));

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SVFormBuilder = /** @class */ (function (_super) {
    __extends(SVFormBuilder, _super);
    function SVFormBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Construct a new {@link FormGroup} with the given map of configuration.
     * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
     *
     * See the {@link FormGroup} constructor for more details.
     */
    /**
       * Construct a new {@link FormGroup} with the given map of configuration.
       * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
       *
       * See the {@link FormGroup} constructor for more details.
       */
    SVFormBuilder.prototype.svgroup = /**
       * Construct a new {@link FormGroup} with the given map of configuration.
       * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
       *
       * See the {@link FormGroup} constructor for more details.
       */
    function (controlsConfig, extra) {
        if (extra === void 0) { extra = null; }
        var controls = this._reduceControls(controlsConfig);
        var validator = extra != null ? extra['validator'] : null;
        var asyncValidator = extra != null ? extra['asyncValidator'] : null;
        return new SVFormGroup(new _angular_forms.FormGroup(controls, validator, asyncValidator));
    };
    /** @internal */
    /** @internal */
    SVFormBuilder.prototype._reduceControls = /** @internal */
    function (controlsConfig) {
        var _this = this;
        var controls = {};
        Object.keys(controlsConfig).forEach(function (controlName) {
            controls[controlName] = _this._createControl(controlsConfig[controlName]);
        });
        return controls;
    };
    /** @internal */
    /** @internal */
    SVFormBuilder.prototype._createControl = /** @internal */
    function (controlConfig) {
        if (controlConfig instanceof _angular_forms.FormControl || controlConfig instanceof _angular_forms.FormGroup ||
            controlConfig instanceof _angular_forms.FormArray) {
            return controlConfig;
        }
        else if (Array.isArray(controlConfig)) {
            var value = controlConfig[0];
            var validator = controlConfig.length > 1 ? controlConfig[1] : null;
            var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
            return this.control(value, validator, asyncValidator);
        }
        else {
            return this.control(controlConfig);
        }
    };
    return SVFormBuilder;
}(_angular_forms.FormBuilder));

var SVFormModule = /** @class */ (function () {
    function SVFormModule() {
    }
    return SVFormModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

exports.SVFormGroup = SVFormGroup;
exports.SVFormBuilder = SVFormBuilder;
exports.SVFormModule = SVFormModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
