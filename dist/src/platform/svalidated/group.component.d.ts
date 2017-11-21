import { FormGroup } from "@angular/forms";
/**
 * Server side validated form.
 *
 * @author Eduardo Elias Saleh
 */
export declare class SVFormGroup extends FormGroup {
    /**
     *
     */
    constructor(controls: any, validator?: any, asyncValidator?: any);
    setFromModelState(response: any, form: SVFormGroup): void;
}
