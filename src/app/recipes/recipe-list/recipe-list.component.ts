import { Component, EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply test', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bonappetit.com%2Frecipe%2Fsheet-pan-gnocchi&psig=AOvVaw34_iwFlqPBct4l6cU_a3G7&ust=1642166827257000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPj0sqbqrvUCFQAAAAAdAAAAABAJ')
    ,new Recipe('A test Recipe', 'This is simply test', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bonappetit.com%2Frecipe%2Fsheet-pan-gnocchi&psig=AOvVaw34_iwFlqPBct4l6cU_a3G7&ust=1642166827257000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPj0sqbqrvUCFQAAAAAdAAAAABAJ')
 
  ]; 
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe):void
  {
    this.recipeWasSelected.emit(recipe);
  }
 
}
