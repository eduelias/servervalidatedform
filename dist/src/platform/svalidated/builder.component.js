var __extends = (this && this.__extends) || (function() {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] }
            instanceof Array && function(d, b) { d.__proto__ = b; }) ||
        function(d, b) {
            for (var p in b)
                if (b.hasOwnProperty(p)) d[p] = b[p];
        };
    return function(d, b) {
        extendStatics(d, b);

        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { FormBuilder } from "@angular/forms";
import { SVFormGroup } from "./group.component";
import { NgModule } from "@angular/core";
var SVFormBuilder = (function(_super) {
    __extends(SVFormBuilder, _super);

    function SVFormBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVFormBuilder.prototype.group = function(controlsConfig, extra) {
        return new SVFormGroup(controlsConfig, extra);
    };
    return SVFormBuilder;
}(FormBuilder));
export { SVFormBuilder };
SVFormBuilder.decorators = [
    { type: NgModule, args: [{}, ] },
];
/** @nocollapse */
SVFormBuilder.ctorParameters = function() { return []; };
//# sourceMappingURL=builder.component.js.map