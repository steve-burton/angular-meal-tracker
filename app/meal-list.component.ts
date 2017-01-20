import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div *ngFor="let currentMeal of childMealList">
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

  editMealButtonClicked(mealToEdit: Meal) {
    this.editClickSender.emit(mealToEdit);
  }
}
