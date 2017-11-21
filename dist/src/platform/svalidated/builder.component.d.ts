import { FormBuilder } from '@angular/forms';
import { SVFormGroup } from './group.component';
export declare class SVFormBuilder extends FormBuilder {
    /**
     * Construct a new {@link FormGroup} with the given map of configuration.
     * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
     *
     * See the {@link FormGroup} constructor for more details.
     */
    svgroup(controlsConfig: {
        [key: string]: any;
    }, extra?: {
        [key: string]: any;
    } | null): SVFormGroup;
}
