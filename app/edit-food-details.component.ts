import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
  <div class="food-form">
  <h4>Edit Name:</h4>
  <input [(ngModel)]="food.name"/>
  <h4>Edit Details:</h4>
  <input [(ngModel)]="food.details"/>
  <h4>Edit Calories:</h4>
  <input [(ngModel)]="food.calories"/>
  </div>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
