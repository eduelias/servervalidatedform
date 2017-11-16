import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
var CirusComponent = (function() {
    function CirusComponent() {
        console.log("hello cicrus");
    }
    return CirusComponent;
}());
CirusComponent.decorators = [{
    type: Component,
    args: [{
        selector: 'slb-circus',
        template: "\n       \n      <h1>circus coming from npm package</h1>\n  "
    }, ]
}, ];
/**
 * @nocollapse
 */
CirusComponent.ctorParameters = function() { return []; };
var routes = [
    { path: '', component: CirusComponent }
];
var CirusRoutingModule = (function() {
    function CirusRoutingModule() {}
    return CirusRoutingModule;
}());
CirusRoutingModule.decorators = [{
    type: NgModule,
    args: [{
        imports: [
            RouterModule.forChild(routes),
        ],
        exports: [RouterModule]
    }, ]
}, ];
/**
 * @nocollapse
 */
CirusRoutingModule.ctorParameters = function() { return []; };
var CirusModule = (function() {
    function CirusModule() {}
    return CirusModule;
}());
CirusModule.decorators = [{
    type: NgModule,
    args: [{
        declarations: [
            CirusComponent,
        ],
        imports: [
            CommonModule,
            CirusRoutingModule,
        ],
        providers: [],
        exports: [CirusComponent]
    }, ]
}, ];
/**
 * @nocollapse
 */
CirusModule.ctorParameters = function() { return []; };
// Public classes.
// export { SumService } from './modules/services/sum.service';
// export { ArithmeticModule } from './modules/arithmetic.module';
/**
 * Angular library starter.
 * Build an Angular library compatible with AoT compilation & Tree shaking.
 * Written by Roberto Simonetti.
 * MIT license.
 * https://github.com/robisim74/server-validated-form
 */
/**
 * Entry point for all public APIs of the package.
 */
/**
 * Generated bundle index. Do not edit.
 */
export { routes, CirusRoutingModule, CirusComponent, CirusModule };
//# sourceMappingURL=server-validated-form.es5.js.map