import { NgModule } from '@angular/core';

import { SVFormBuilder } from './svalidated/builder.component';
import { SVFormGroup } from './svalidated/group.component';
import { SVFormControl } from './svalidated/formControl/control.component';
/**
 * Server side validated form.
 *
 * @author Eduardo Elias Saleh
 */
@NgModule({
})

export class SVFormModule {
    static forRoot(): SVFormModule {
        return {ngModule: SVFormModule, providers: []};
    }
}