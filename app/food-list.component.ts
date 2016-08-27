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

  <select (change)="onChange($event.target.value)" class="filter">
  <option value="all" selected="selected">Show All</option>
  <option value="lowCalorie">Show Low Calorie Items</option>
  <option value="highCalorie" >Show High Calorie Items</option>
</select>
  <h4>Click on food to see details, and edit.</h4>
  <food-display *ngFor="#currentFood of foodList | calories:selectedCompleteness"
 (click)= "foodClicked(currentFood)" [class.selected]="currentFood === selectedFood"[food]="currentFood"></food-display>

  <edit-food-details *ngIf="selectedFood" [food]="selectedFood"></edit-food-details>

  `
})


export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedCompleteness: string = "all";
  public selectedFood: Food;
  constructor(){
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void{
    console.log("child",clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood)


  }
  onChange(optionFromMenu){
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  createFood(food): void {
      this.foodList.push(
        new Food(food.userName, food.userDetails, food.userCalories)
      )
    }
}
