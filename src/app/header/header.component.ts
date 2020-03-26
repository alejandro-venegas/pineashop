import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { ShoppingService } from '../shopping-list/shopping.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('shoppingCart', { static: true }) shoppingCartEl: ElementRef;
  @ViewChild('messages', { static: true }) messagesElement: ElementRef;
  title = 'Pineashop';
  shoppingCart = faShoppingCart;
  shoppingCounter: number = 0;
  constructor(
    private shoppingService: ShoppingService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.shoppingCounter = this.shoppingService.shoppingItems.length;

    this.shoppingService.itemsChanged.subscribe(counter => {
      this.shoppingCounter = counter;
      console.log(this.messagesElement);
      this.renderer.setStyle(
        this.messagesElement.nativeElement,
        'opacity',
        '1'
      );
      setTimeout(
        () =>
          this.renderer.setStyle(
            this.messagesElement.nativeElement,
            'opacity',
            '0'
          ),
        4000
      );
    });
  }
}
