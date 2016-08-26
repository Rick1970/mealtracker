import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
  <div class="food-form">
      <h3>Edit Name: </h3>
      <input [(ngModel)]="food.name" class="col-sm-8 input-lg food-form"/>
    </div>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
