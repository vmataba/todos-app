import {Directive} from "@angular/core";
import {AbstractControl, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: 'confirmationPassword'
})
export class ConfirmationPassword implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return null
  }

}
