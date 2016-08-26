import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';


@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  template: `
  <div class="container">
  <h3 *ngFor="#currentFood of foodList" (click)= "foodClicked(currentFood)">{{currentFood.name}}</h3>
  </div>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  foodClicked(clickedFood: Food): void{
    console.log(clickedFood);
  }
}
