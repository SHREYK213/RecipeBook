import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipe: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is a desc',
      'https://www.vegrecipesofindia.com/wp-content/uploads/2021/09/malpua-1-1024x1536.jpg'
    ),
    new Recipe(
      'A test Another Recipe',
      'This is another desc',
      'https://www.vegrecipesofindia.com/wp-content/uploads/2021/09/malpua-1-1024x1536.jpg'
    ),
  ];
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
