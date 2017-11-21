import { Injectable } from "@angular/core";
import { FormGroup, ValidatorFn, AsyncValidatorFn, AbstractControl } from "@angular/forms";

/**
 * Server side validated form.
 *
 * @author Eduardo Elias Saleh
 */
@Injectable()
export class SVFormGroup extends FormGroup {
  constructor(    
    controls: any, validator?: any,
    asyncValidator?: any
  ) {        
    super(controls, validator, asyncValidator);
  }

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

//@Injectable()
// export class SVFormGroup extends FormGroup {
//     setFromModelState(response: any, form: SVFormGroup) {
//     if(response.error && response.error.ModelState){
//       let validationErrorDictionary = response.error.ModelState;
//       for (var fieldName in validationErrorDictionary) {
//         if (validationErrorDictionary.hasOwnProperty(fieldName)) {
//           if (form.controls[fieldName]) {
//             form.controls[fieldName].setErrors(validationErrorDictionary[fieldName]);
//           } else {                          
//             this.setErrors(Object.assign(this.errors, validationErrorDictionary[fieldName]));
//           }
//         }
//       }
//     }
//   }
// }
