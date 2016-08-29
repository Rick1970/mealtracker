import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
  <div class="food-form">
  <h3>Name:</h3>
  <input [(ngModel)]="food.name"  class="input-lg"/>
  <h3>Details:</h3>
  <input [(ngModel)]="food.details"  class="input-lg"/>
  <h3>Calories:</h3>
  <input [(ngModel)]="food.calories"  class="input-lg"/>
  </div>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
