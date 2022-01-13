import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]=[
    new Ingredient('Apples', 5),
    new Ingredient('Bannana', 2),
    new Ingredient('Carrot', 1),
    new Ingredient('Strawberry', 5),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
