import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from "rxjs";
import { ClientProvider } from "../../providers/index";
import { map } from "rxjs/operators";

/**
 * Generated class for the UniqueIdentificationValidadorDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[uniqueIdentification]', // Attribute selector
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueIdentificationValidadorDirective, multi: true }]
})
export class UniqueIdentificationValidadorDirective {

  constructor(private clientProvider: ClientProvider) {
  }

  /**
   * Directiva que valida si el número de identificación es unico
   */
  validate(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this
        .clientProvider
        .getClients()
        .pipe(map(data => {
          for (const key in data) {
            if (data[key].identification === control.value) {
              return { 'uniqueIdentification': { value: control.value } }
            }
          }
          return null
        }))
    };
  }

}
