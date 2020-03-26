import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { ShoppingService } from '../shopping-list/shopping.service';
import { NoticeMessagesService } from '../../shared/notice-messages.service';
import { Renderer } from '@angular/compiler-cli/ngcc/src/rendering/renderer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('shoppingCart', { static: true }) shoppingCartEl: ElementRef;
  @ViewChild('messageContainer', { static: true }) messageContainer: ElementRef;
  title = 'Pineashop';
  shoppingCart = faShoppingCart;
  shoppingCounter: number = 0;
  message: string;

  constructor(
    private shoppingService: ShoppingService,
    private noticeMessagesService: NoticeMessagesService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.shoppingCounter = this.shoppingService.shoppingItems.length;

    this.shoppingService.itemsChanged.subscribe(counter => {
      this.shoppingCounter = counter;
    });

    this.noticeMessagesService.noticeMessages.subscribe(data => {
      let backgroundColor;
      this.message = data.message;
      this.renderer.removeStyle(
        this.messageContainer.nativeElement,
        'animation'
      );
      void this.messageContainer.nativeElement.offsetWidth;
      this.renderer.setStyle(
        this.messageContainer.nativeElement,
        'animation',
        'move-notice 3s'
      );
      switch (data.id) {
        case 1:
          backgroundColor = '#398f37';
          break;
        case 2:
          backgroundColor = '#afac31';
          break;
        default:
          break;
      }
      this.renderer.setStyle(
        this.messageContainer.nativeElement,
        'background-color',
        backgroundColor
      );
    });
  }
}
