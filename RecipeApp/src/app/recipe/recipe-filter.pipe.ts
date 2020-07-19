import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from './recipe.model';

@Pipe({
  name: 'recipeFilter'
})
export class RecipeFilterPipe implements PipeTransform {

  // Dont use this kind of pipe
  // Filter on backend!
  // -- simply for demonstration purposes --
  transform(recipes: Recipe[], name: string, ): Recipe[] {
    if (!name || name.length == 0) {
      return recipes;
    } else {
      return recipes.filter(r => r.name.toLowerCase().includes(name.toLowerCase()));
    }
  }

}
