import { FormGroup } from "@angular/forms/src/model";
import { NgModule } from "@angular/core";

/**
 * Server side validated form.
 *
 * @author Eduardo Elias Saleh
 */
@NgModule({})


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
