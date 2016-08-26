import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal Master Express.</h1>
      <h3 *ngFor="#food of foods">{{food.name}}</h3>
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
  new Food("Eggs", "Three eggs with breakfast", "300")
];
  }

}
