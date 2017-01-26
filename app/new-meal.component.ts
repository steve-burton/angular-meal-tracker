import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div class="new-meal">
    <h3>New Meal</h3>
    <div class="form-group">
      <label type="text" for="name">Meal name:</label>
      <input #newName class="form-control" id="name">
    </div>
    <div class="form-group">
      <label>Details:</label>
      <input #newDetails class="form-control">
    </div>
    <div class="form-group">
      <label>Calories:</label>
      <input type="number" #newCalories class="form-control" required>
    </div>
    <button class="btn btn-default" (click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value='';">Add meal</button>
  </div><br>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(name: string, details: string, calories) {
    if(name === "") {
      return alert("Please enter the name of your meal.");
    }
    if(calories === NaN || calories === "" ){
      return alert("Please enter the number of calories.");
    }
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
