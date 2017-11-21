import { Injectable } from "@angular/core";
import { FormGroup, ValidatorFn, AsyncValidatorFn, AbstractControl } from "@angular/forms";

export type FormHooks = 'change' | 'blur' | 'submit';

export interface AbstractControlOptions {
  validators?: ValidatorFn|ValidatorFn[]|null;
  asyncValidators?: AsyncValidatorFn|AsyncValidatorFn[]|null;
  updateOn?: FormHooks;
}

/**
 * Server side validated form.
 *
 * @author Eduardo Elias Saleh
 */
@Injectable()
export class SVFormGroup extends FormGroup {
  setFromModelState(response: any, form: SVFormGroup) { 
    if(response.error && response.error.ModelState){
            let validationErrorDictionary = response.error.ModelState;
            for (var fieldName in validationErrorDictionary) {
              if (validationErrorDictionary.hasOwnProperty(fieldName)) {
                if (form.controls[fieldName]) {
                  form.controls[fieldName].setErrors(validationErrorDictionary[fieldName]);
                } else {                          
                  this.setErrors(Object.assign(this.errors, validationErrorDictionary[fieldName]));
                }
              }
            }
          }
  }
}