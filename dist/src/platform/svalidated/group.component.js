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
import { FormGroup, AbstractControl } from "@angular/forms";
import { Injectable } from "@angular/core";
/**
 * Server side validated form.
 *
 * @author Eduardo Elias Saleh
 */
var /**
 * Server side validated form.
 *
 * @author Eduardo Elias Saleh
 */
SVFormGroup = /** @class */ (function (_super) {
    __extends(SVFormGroup, _super);
    function SVFormGroup(fgroup) {
        return _super.call(this, fgroup.controls, fgroup.validator, fgroup.asyncValidator) || this;
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
/**
 * Server side validated form.
 *
 * @author Eduardo Elias Saleh
 */
export { SVFormGroup };
//# sourceMappingURL=group.component.js.map