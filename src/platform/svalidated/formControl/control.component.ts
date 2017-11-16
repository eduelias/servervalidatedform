import { FormControl } from "@angular/forms/src/model";
import { SVFormGroup } from "../group.component";

export class SVFormControl extends FormControl {
    
    constructor() {
        super();
    }    
    
    SetFromModelState(response: any, form: SVFormGroup) {
        if(response.error && response.error.ModelState){
            let validationErrorDictionary = response.error.ModelState;
            for (var fieldName in validationErrorDictionary) {
                if (validationErrorDictionary.hasOwnProperty(fieldName)) {
                    if (form.controls[fieldName]) {
                      form.controls[fieldName].setErrors(validationErrorDictionary[fieldName]);                      
                    } else {
                        this.errors.setErrors(Object.assign(this.errors, validationErrorDictionary[fieldName]));
                    }
                }
            }
        }
    }
}