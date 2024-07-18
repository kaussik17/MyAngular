import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any): any {
    if (value.toLowerCase() === 'male') {
      return 'M';
    } else if (value.toLowerCase() === 'female') {
      return 'F';
    }
    return value;
  }

}

