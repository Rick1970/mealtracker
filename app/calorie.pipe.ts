import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriePipe implements PipeTransform {
  transform = function(input: Food[]){
    var output: Food[] = [];

    for (var i = 0; i < input.length; i++){
      var digits = parseInt(input[i].calories);
      if(digits <= 200 ){
        output.push(input[i]);
      }
    }
    return output;
  }

}
