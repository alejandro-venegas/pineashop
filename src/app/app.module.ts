import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { MinValueDirective } from '../shared/minValue.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    ShoppingListComponent,
    ProductDetailsComponent,
    MinValueDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
