import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    if (args?.length) {
      
      return value.filter(item => item.name.toLowerCase().includes(args.toLowerCase()))

    }

    return value;
  }

}

// Convention Of Configuration -> C.O.C