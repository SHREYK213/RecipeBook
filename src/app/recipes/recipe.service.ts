import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipe: Recipe[] = [
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

  getRecipes() {
    return this.recipe.slice();
  }
  constructor() {}
}
