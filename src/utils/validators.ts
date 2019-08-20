import { AbstractControl, ValidatorFn } from '@angular/forms';
import * as moment from 'moment';

export class CustomValidators {
  constructor() { }

  /**
   * Método que verifica si el cliente es mayor de edad
   */
  isAdult(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const age = moment.duration(moment().diff(control.value)).asYears()
      return (age <= 18) ? { 'isAdult': { value: control.value } } : null;
    }
  }
}

