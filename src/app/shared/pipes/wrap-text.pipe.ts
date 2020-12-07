import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'wrapText'
})
export class WrapTextPipe implements PipeTransform {

  transform(string: string, length: number): string {
    return string;
    // let words = string.split(' ')
    // return words.reduce(function (acc, cur) {
    //   return acc.length <= length ? acc + ' ' + cur : acc + ' \n ' + cur
    // }, '')
  }
}
