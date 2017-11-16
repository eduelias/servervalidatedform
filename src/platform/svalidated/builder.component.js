"use strict";
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
exports.__esModule = true;
var form_builder_1 = require("@angular/forms/src/form_builder");
var group_component_1 = require("./group.component");
var SVFormBuilder = /** @class */ (function (_super) {
    __extends(SVFormBuilder, _super);
    function SVFormBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVFormBuilder.prototype.group = function (controlsConfig, extra) {
        return new group_component_1.SVFormGroup(controlsConfig, extra);
    };
    return SVFormBuilder;
}(form_builder_1.FormBuilder));
exports.SVFormBuilder = SVFormBuilder;
