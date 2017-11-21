import { FormGroup } from "@angular/forms";
/**
 * Server side validated form.
 *
 * @author Eduardo Elias Saleh
 */
export declare class SVFormGroup extends FormGroup {
    constructor(fgroup: FormGroup);
    /**
     * Receives errors from the modelstate and print them
     * @param response http call response
     */
    setFromModelState(response: any): void;
}
