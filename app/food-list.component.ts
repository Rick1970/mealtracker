import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { FoodComponent} from './food.component';
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { NewFoodComponent } from './new-food.component';
import { CaloriePipe } from './calorie.pipe';


@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodComponent, EditFoodDetailsComponent, NewFoodComponent],
  pipes: [CaloriePipe],
  template: `
  <new-food (onSubmitNewFood)="createFood($event)"></new-food>
  <h2>Here is your food list:</h2>

  <select>
  <option value="all">Show All</option>
  <option value="lowCalorie">Show Low Calorie Foods</option>
  <option value="highCalorie" selected="selected">Show High Calorie Foods</option>
</select>
  <h4>Click on food to see details, and edit.</h4>
  <food-display *ngFor="#currentFood of foodList | calories"
 (click)= "foodClicked(currentFood)" [class.selected]="currentFood === selectedFood"[food]="currentFood"></food-display>

  <edit-food-details *ngIf="selectedFood" [food]="selectedFood"></edit-food-details>

  `
})


export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public threshold:string = "all";
  public selectedFood: Food;
  constructor(){
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void{
    console.log("child",clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood)


  }
  onFilterClick(optionFromMenu){
    this.threshold = optionFromMenu;
  }
  createFood(food): void {
      this.foodList.push(
        new Food(food.userName, food.userDetails, food.userCalories)
      )
    }
}
