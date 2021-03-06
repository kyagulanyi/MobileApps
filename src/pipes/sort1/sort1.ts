import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the Sort1Pipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'sort1',
})
export class Sort1Pipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(array: Array<string>, args?: any): Array<string> {
    return array.sort(function(a, b){
      if(a[args.property] < b[args.property]){
          return -1 * args.order;
      }
      else if( a[args.property] > b[args.property]){
          return 1 * args.order;
      }
      else{
          return 0;
      }
    });
  }
  // transform(value: string, ...args) {
  //   return value.toLowerCase();
  // }
}
