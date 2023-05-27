import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";



export function BanNameValidator(banWords: string[] = []): ValidatorFn{
    return function BanNameValidator(control: AbstractControl<string>): ValidationErrors | null {
        return banWords.indexOf(control?.value?.toLowerCase()) > -1
        ? { BanNameValidator: { banWords : banWords[banWords.indexOf(control?.value?.toLowerCase())].toLowerCase()} }
        : null;
    }
}

