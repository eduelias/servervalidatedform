import { FormGroup } from "@angular/forms";
import { Injectable } from "@angular/core";

/**
 * Server side validated form.
 *
 * @author Eduardo Elias Saleh
 */
@Injectable()
export class SVFormGroup extends FormGroup {
  constructor(fgroup: FormGroup) {
      super(fgroup.controls, fgroup.validator, fgroup.asyncValidator);
    }
    
  /**
   * Receives errors from the modelstate and print them
   * @param response http call response
   */
  setFromModelState(response: any) { 
    if(response.error && response.error.ModelState){
            let validationErrorDictionary = response.error.ModelState;
            for (var fieldName in validationErrorDictionary) {
              if (validationErrorDictionary.hasOwnProperty(fieldName)) {
                if (this.controls[fieldName]) {
                  this.controls[fieldName].setErrors(validationErrorDictionary[fieldName]);
                } else {                          
                  this.setErrors(Object.assign(this.errors, validationErrorDictionary[fieldName]));
                }
              }
            }
          }
  }
}