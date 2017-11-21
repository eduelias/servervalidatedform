import { FormGroup, ValidatorFn, AsyncValidatorFn } from "@angular/forms";
export declare type FormHooks = 'change' | 'blur' | 'submit';
export interface AbstractControlOptions {
    validators?: ValidatorFn | ValidatorFn[] | null;
    asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[] | null;
    updateOn?: FormHooks;
}
/**
 * Server side validated form.
 *
 * @author Eduardo Elias Saleh
 */
export declare class SVFormGroup extends FormGroup {
    setFromModelState(response: any, form: SVFormGroup): void;
}
