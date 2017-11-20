(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms/src/model'), require('@angular/forms/src/form_builder'), require('src/platform/svalidated/group.component')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/forms/src/model', '@angular/forms/src/form_builder', 'src/platform/svalidated/group.component'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.svform = global.ng.svform || {}),global._angular_forms_src_model,global._angular_forms_src_form_builder,global.src_platform_svalidated_group_component));
}(this, (function (exports,_angular_forms_src_model,_angular_forms_src_form_builder,src_platform_svalidated_group_component) { 'use strict';

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
var SVFormControl = (function (_super) {
    __extends(SVFormControl, _super);
    function SVFormControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SVFormControl;
}(_angular_forms_src_model.FormControl));

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
var SVFormBuilder = (function (_super) {
    __extends$1(SVFormBuilder, _super);
    function SVFormBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVFormBuilder.prototype.group = function (controlsConfig, extra) {
        return new src_platform_svalidated_group_component.SVFormGroup(controlsConfig, extra);
    };
    return SVFormBuilder;
}(_angular_forms_src_form_builder.FormBuilder));

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SVFormGroup$1 = (function (_super) {
    __extends$2(SVFormGroup$$1, _super);
    function SVFormGroup$$1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVFormGroup$$1.prototype.setFromModelState = function (response, form) {
        if (response.error && response.error.ModelState) {
            var validationErrorDictionary = response.error.ModelState;
            for (var fieldName in validationErrorDictionary) {
                if (validationErrorDictionary.hasOwnProperty(fieldName)) {
                    if (form.controls[fieldName]) {
                        form.controls[fieldName].setErrors(validationErrorDictionary[fieldName]);
                    }
                    else {
                        this.setErrors(Object.assign(this.errors, validationErrorDictionary[fieldName]));
                    }
                }
            }
        }
    };
    return SVFormGroup$$1;
}(_angular_forms_src_model.FormGroup));

/**
 * Generated bundle index. Do not edit.
 */

//export { SVFormModule } from './src/platform/server-validated-form.module'

exports.SVFormControl = SVFormControl;
exports.SVFormBuilder = SVFormBuilder;
exports.SVFormGroup = SVFormGroup$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
