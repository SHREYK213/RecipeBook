import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipe: Recipe[] = [
    new Recipe(
      'Spaghetti',
      'Its just spaghetti',
      'https://urbanblisslife.com/wp-content/uploads/2023/01/Jolibee-Spaghetti-FEATURE.jpg',
      [
        new Ingredient('Spaghetti', 1),
        new Ingredient('Sauce', 1),
        new Ingredient('Parsle', 1),
      ]
    ),
    new Recipe(
      'Extra Large Burger ',
      'A large Burger',
      'https://www.eatthis.com/wp-content/uploads/sites/4/2023/02/Wendys-Big-Bacon-Classic-Triple.jpg?quality=82&strip=all',
      [
        new Ingredient('Buns', 1),
        new Ingredient('Meat', 1),
        new Ingredient('Mayo', 1),
      ]
    ),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipe.slice();
  }
  constructor(private slService: ShoppingListService) {}

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
