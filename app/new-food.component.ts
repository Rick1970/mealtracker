import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
  <div class="food-form">
  <h3>Create Food:</h3>
  <h4>Enter Name:</h4>
  <input placeholder="Name" class="input-lg"#newName>
  <h4>Enter Details:</h4>
  <input placeholder="Details" class="input-lg"#newDetails>
  <h4>Enter Calories:</h4>
  <input placeholder="Calories" class="input-lg"#newCalories>

  <button class="btn-custom" (click)="addFood(newName, newDetails, newCalories)">Add</button>
</div>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Object>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement){
    this.onSubmitNewFood.emit({userName: userName.value, userDetails: userDetails.value, userCalories: userCalories.value});
    userName.value = "";
    userDetails.value = "";
    userCalories.value = "";

  }
}
