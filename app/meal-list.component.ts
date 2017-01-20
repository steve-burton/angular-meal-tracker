import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="meals-area">
    <select (change)="caloriesChange($event.target.value)">
      <option value= 0 selected="selected">All meals</option>
      <option value= 500>High calorie</option>
    </select>
    <div class="meal-list" *ngFor="let currentMeal of childMealList | calories:filterByCalories">
    <img *ngIf="showThumbs(currentMeal)" src="../resources/images/thumbs-up.png">
      <h4>Name: {{currentMeal.name}} <span class="calories">{{currentMeal.calories}} calories</span></h4>
      <p>Details: {{currentMeal.details}}</p>
      <button class="btn btn-default" (click)="editMealButtonClicked(currentMeal)">Edit meal</button>
    </div>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() editClickSender = new EventEmitter();

  filterByCalories: number = 0;

  showThumbs(currentMeal) {
    if (currentMeal.calories < 400) {
      return true;
    }
  }

  caloriesChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }

  editMealButtonClicked(mealToEdit: Meal) {
    this.editClickSender.emit(mealToEdit);
  }
}
