import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import {FoodListComponent} from './food-list.component';


@Component({
    selector: 'food-display',
    inputs: ['food'],
  template: `
    <h3>{{ food.name}}</h3>
  `
})

export class FoodComponent {
  public food: Food;
}
