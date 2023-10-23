import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
 
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
recipe:Recipe[]=[
  new Recipe('A test Recipe','This is a desc','https://www.vegrecipesofindia.com/wp-content/uploads/2021/09/malpua-1-1024x1536.jpg')
];
}
