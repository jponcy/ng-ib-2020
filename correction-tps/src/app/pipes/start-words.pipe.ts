import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startWords'
})
export class StartWordsPipe implements PipeTransform {

  transform(value: string, wordNb: number = 5): string {
    let result: string = null;

    if (value) {
      const words = value.split(/\s+/);

      if (words.length > wordNb) {
        result = words.slice(0, wordNb + 1).join(' ') + '...';

        // result = '';

        // for (let i = 0; i < 20; ++i) {
        //   if (result) {
        //     result += ' ';
        //   }

        //   result += words[i];
        // }

        // result += '...';
      } else {
        result = value;
      }
    }

    return result;
  }

}
