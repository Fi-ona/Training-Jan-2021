import { AbstractControl, ValidatorFn } from "@angular/forms";

export function pinValidation(reg : RegExp) : ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        if(control.value && !control.value.toString().match(reg)){
            return {pin: control.value};
        }
        return null;
      };
}