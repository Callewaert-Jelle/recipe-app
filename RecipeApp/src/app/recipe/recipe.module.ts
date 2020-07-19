import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeComponent } from './recipe/recipe.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeFilterPipe } from './recipe-filter.pipe';

@NgModule({
  declarations: [
    RecipeComponent,
    IngredientComponent,
    RecipeListComponent,
    AddRecipeComponent,
    RecipeFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RecipeListComponent
  ]
})
export class RecipeModule { }
