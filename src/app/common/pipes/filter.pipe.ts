import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(values: any[], keyword: string) {
    if (!keyword) {
      return values;
    }
    return values.filter((value) => {
      return JSON.stringify(value)
        .toLowerCase()
        .includes(keyword.toLowerCase());
    });
  }
}
