import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

    transform(dateOfBirth: Date, gender: string): string {
        const birthDate = new Date(dateOfBirth);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
    
        // if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        //   age--;
        // }
    
        let genderShort = gender.toLowerCase() === 'male' ? 'M' : gender.toLowerCase() === 'female' ? 'F' : gender;
        
        return `${age}-${genderShort}`;
      }

}
