import { Pipe, PipeTransform } from '@angular/core';
import { GENDER } from './constants';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string): string {
    let result = GENDER.find(val => val.value == value ? val: GENDER[2])
    return result.label;
  }

}
