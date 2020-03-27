import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {
  @ViewChild('form', { static: true }) form: NgForm;
  @Input() item;
  valueChange = false;
  quantity: number;
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.quantity = this.item.quantity;
    this.form.valueChanges.subscribe(value => {
      if (this.item.quantity !== value.quantity) {
        this.valueChange = true;
      } else {
        this.valueChange = false;
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.shoppingService.editItem(this.item, this.form.value.quantity);
      this.form.resetForm({ quantity: this.quantity });
    }
  }
}
