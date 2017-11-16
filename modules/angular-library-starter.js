import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

class CirusComponent {
    constructor() {
        console.log("hello cicrus");
    }
}
CirusComponent.decorators = [{
    type: Component,
    args: [{
        selector: 'slb-circus',
        template: `
       
      <h1>circus coming from npm package</h1>
  `
    }, ]
}, ];
/**
 * @nocollapse
 */
CirusComponent.ctorParameters = () => [];

const routes = [
    { path: '', component: CirusComponent }
];
class CirusRoutingModule {}
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
CirusRoutingModule.ctorParameters = () => [];

class CirusModule {}
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
CirusModule.ctorParameters = () => [];

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
//# sourceMappingURL=server-validated-form.js.map