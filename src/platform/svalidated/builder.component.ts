import {Injectable} from '@angular/core';
import { FormBuilder, ValidatorFn, AsyncValidatorFn, FormGroup, AbstractControl, FormControl, FormArray } from '@angular/forms';
import { SVFormGroup } from 'index';

/**
 * @whatItDoes Creates an {@link AbstractControl} from a user-specified configuration.
 *
 * It is essentially syntactic sugar that shortens the `new FormGroup()`,
 * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
 * forms.
 *
 * @howToUse
 *
 * To use, inject `FormBuilder` into your component class. You can then call its methods
 * directly.
 *
 * {@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
 *
 *  * **npm package**: `@angular/forms`
 *
 *  * **NgModule**: {@link ReactiveFormsModule}
 *
 * @stable
 */
@Injectable()
export class SVFormBuilder extends FormBuilder {
  /**
   * Construct a new {@link FormGroup} with the given map of configuration.
   * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
   *
   * See the {@link FormGroup} constructor for more details.
   */
  svgroup(controlsConfig: {[key: string]: any}, extra: {[key: string]: any}|null = null): SVFormGroup {
    const controls = this._reduceControls(controlsConfig);
    const validator: ValidatorFn = extra != null ? extra['validator'] : null;
    const asyncValidator: AsyncValidatorFn = extra != null ? extra['asyncValidator'] : null;
    return new SVFormGroup(controls, validator, asyncValidator);
  }


  /** @internal */
  _reduceControls(controlsConfig: {[k: string]: any}): {[key: string]: AbstractControl} {
    const controls: {[key: string]: AbstractControl} = {};
    Object.keys(controlsConfig).forEach(controlName => {
      controls[controlName] = this._createControl(controlsConfig[controlName]);
    });
    return controls;
  }

  /** @internal */
  _createControl(controlConfig: any): AbstractControl {
    if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
        controlConfig instanceof FormArray) {
      return controlConfig;

    } else if (Array.isArray(controlConfig)) {
      const value = controlConfig[0];
      const validator: ValidatorFn = controlConfig.length > 1 ? controlConfig[1] : null;
      const asyncValidator: AsyncValidatorFn = controlConfig.length > 2 ? controlConfig[2] : null;
      return this.control(value, validator, asyncValidator);

    } else {
      return this.control(controlConfig);
    }
  }
}