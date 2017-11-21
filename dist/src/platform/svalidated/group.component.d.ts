import { FormGroup } from "@angular/forms";
/**
 * Server side validated form.
 *
 * @author Eduardo Elias Saleh
 */
export declare class SVFormGroup extends FormGroup {
    constructor(fgroup: FormGroup);
    setFromModelState(response: any, form: SVFormGroup): void;
}
