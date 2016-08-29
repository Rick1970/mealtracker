import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriePipe implements PipeTransform {
  transform = function(input: Food[], info){
    var desiredCalories = info[0];
    var output: Food[] = [];
    if(desiredCalories === "lowCalorie"){
      for (var i = 0; i < input.length; i++){
        var digits = parseInt(input[i].calories);
        if(digits <= 500 ){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCalories === "highCalorie"){
      for (var i = 0; i < input.length; i++){
        var digits = parseInt(input[i].calories);
        if(digits > 500 ){
          output.push(input[i]);
        }
      }
      return output;
    }   else {
      return input;
    }
  }
}
