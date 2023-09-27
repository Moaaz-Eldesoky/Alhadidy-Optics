import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateDescription'
})
export class TruncateDescriptionPipe implements PipeTransform {

  transform(description: string, maxLength: number = 100): string {
    if (description.length <= maxLength) {
      return description;
    } else {
      return description.substr(0, maxLength) + '...';
    }
  }
}
