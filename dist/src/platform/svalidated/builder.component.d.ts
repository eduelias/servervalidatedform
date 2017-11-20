import { FormBuilder } from "@angular/forms/src/form_builder";
import { SVFormGroup } from "src/platform/svalidated/group.component";
export declare class SVFormBuilder extends FormBuilder {
    group(controlsConfig: {
        [key: string]: any;
    }, extra?: {
        [key: string]: any;
    } | null): SVFormGroup;
}
