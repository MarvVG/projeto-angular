import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from './product.model';
import { CardComponent } from "../shared/card/card.component";
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { DUMMY_PRODUCTS } from '../dummy-users';

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    imports: [CardComponent,CommonModule]
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/products/' + this.product.avatar ;
  }

  
  constructor(private router: Router, private productService: ProductService, private cardService: CartService) {}

  onSelectProductToDesc() { 
    this.productService.setSelectedProduct(this.product.id);
    this.router.navigate(['/description']);
  }
  onSelectProduct() {
    this.cardService.addProduct(DUMMY_PRODUCTS.find(product => product.id === this.product.id)!);
  }
}