import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import {FoodListComponent} from './food-list.component';
import { FoodComponent} from './food.component';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
    


      <food-list
        [foodList]="foods"
        (onFoodSelect)="foodWasSelected($event)">
      </food-list>
      </div>

  `
})
export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
  new Food("Whopper", "Burger King food.", "860"),
  new Food("Bacon", "Breakfast.", "300"),
  new Food("Pizza", "Slice of pizza at lunch", "380"),
  new Food("Eggs", "Three eggs with breakfast", "300"),
  new Food("Salsa", "Snack", "50"),
  new Food("Toast", "Breakfast", "100")
];
  }
  foodWasSelected(clickedFood: Food): void {
    console.log("parent", clickedFood);
  }

}
