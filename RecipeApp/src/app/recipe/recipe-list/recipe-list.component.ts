import { Component, OnInit } from '@angular/core';
import { RECIPES } from '../mock-recipes'
import { Recipe } from '../recipe.model';
import { RecipeDataService } from '../recipe-data.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  filterRecipeName: string;

  constructor(private _recipeDataService: RecipeDataService) { }

  ngOnInit(): void {
  }

  addNewRecipe(newRecipe: Recipe) {
    this._recipeDataService.addNewRecipes(newRecipe);
  }
  applyFilter(newFilter: string) {
    this.filterRecipeName = newFilter;
  }

  get recipes(): Recipe[] { return this._recipeDataService.recipes };

}
