import { Component } from '@angular/core';
import {Recepies} from "../recipes.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes:Recepies[] = [ new Recepies('A Test Recepie','This is simply a test','https://img.freepik.com/premium-vector/whisk-icon_609277-3710.jpg'),new Recepies('A Test Recepie','This is simply a test','https://img.freepik.com/premium-vector/whisk-icon_609277-3710.jpg')];



}
