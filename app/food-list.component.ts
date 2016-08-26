import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { FoodComponent} from './food.component';
import { EditFoodDetailsComponent } from './edit-food-details.component';


@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodComponent, EditFoodDetailsComponent],
  template: `

  <food-display *ngFor="#currentFood of foodList" (click)= "foodClicked(currentFood)" [class.selected]="currentFood === selectedFood"[food]="currentFood"></food-display>
  <edit-food-details *ngIf="selectedFood" [food]="selectedFood"></edit-food-details>
  `
})


export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  constructor(){
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void{
    console.log("child",clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }

}
