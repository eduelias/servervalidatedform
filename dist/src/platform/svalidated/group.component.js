var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
/**
 * Server side validated form.
 *
 * @author Eduardo Elias Saleh
 */
var SVFormGroup = (function (_super) {
    __extends(SVFormGroup, _super);
    /**
     *
     */
    function SVFormGroup(controls, validator, asyncValidator) {
        return _super.call(this, controls, validator, asyncValidator) || this;
    }
    SVFormGroup.prototype.setFromModelState = function (response, form) {
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
    return SVFormGroup;
}(FormGroup));
export { SVFormGroup };
SVFormGroup.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SVFormGroup.ctorParameters = function () { return [
    null,
    null,
    null,
]; };
//# sourceMappingURL=group.component.js.map