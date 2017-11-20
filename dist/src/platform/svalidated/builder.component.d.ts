import { FormBuilder } from "@angular/forms";
import { SVFormGroup } from "./group.component";
export declare class SVFormBuilder extends FormBuilder {
    group(controlsConfig: {
        [key: string]: any;
    }, extra?: {
        [key: string]: any;
    } | null): SVFormGroup;
}
