import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  Validator,
  ValidatorFn
} from '@angular/forms';

@Directive({
  selector: '[appMinValue]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinValueDirective,
      multi: true
    }
  ]
})
export class MinValueDirective implements Validator {
  @Input('appMinValue') minValue: number;

  validate(control: AbstractControl): { [key: string]: any } | null {
    return forbiddenNameValidator(this.minValue)(control);
  }
}

export function forbiddenNameValidator(num: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = control.value < num;
    return forbidden ? { forbiddenValue: { value: control.value } } : null;
  };
}
