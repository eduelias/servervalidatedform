import { FormBuilder } from "@angular/forms/src/form_builder";
import { SVFormGroup } from "src/platform/svalidated/group.component";
import { NgModule } from "@angular/core";

@NgModule({})

export class SVFormBuilder extends FormBuilder {    
    group(controlsConfig: {
        [key: string]: any;
    }, extra?: {
        [key: string]: any;
    } | null): SVFormGroup {
        return new SVFormGroup(controlsConfig, extra);
    }
}