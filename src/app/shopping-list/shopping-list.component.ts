import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingService } from './shopping.service';
import { ShoppingItem } from '../../shared/shopping-item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  shoppingListSub: Subscription;
  shoppingList: ShoppingItem[] = [];
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.shoppingList = this.shoppingService.shoppingItems;
    console.log(this.shoppingList);
  }
}
