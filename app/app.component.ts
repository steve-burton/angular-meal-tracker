import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>

    <meal-list [childMealList]="masterMealList" (editClickSender)="editMeal($event)"></meal-list>

    <edit-meal [childSelectedMeal]="selectedMeal" (doneButtonClickedSender)="finishedEditing()"></edit-meal>

    <new-meal (newMealSender)="addMeal($event)"></new-meal>

  </div>
  `
})

export class AppComponent {
  masterMealList: Meal[] = [
    new Meal("Omelet", "The works!", 500),
    new Meal("Sandwich", "Tuna on rye", 350),
    new Meal("Spaghetti", "Carbo loading", 700)
  ];
  selectedMeal = null;

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
    this.selectedMeal = null;
  }

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
