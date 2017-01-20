import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <select (change)="caloriesChange($event.target.value)">
    <option value= 0 selected="selected">All meals</option>
    <option value= 500>High calorie</option>
  </select>
  <div *ngFor="let currentMeal of childMealList | calories:filterByCalories">
    <hr>
    <h4>Name: {{currentMeal.name}}</h4>
    <p>Details: {{currentMeal.details}}</p>
    <p>Calories: {{currentMeal.calories}}</p>
    <button class="btn btn-default" (click)="editMealButtonClicked(currentMeal)">Edit meal</button>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() editClickSender = new EventEmitter();

  filterByCalories: number = 0;

  caloriesChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }

  editMealButtonClicked(mealToEdit: Meal) {
    this.editClickSender.emit(mealToEdit);
  }
}
