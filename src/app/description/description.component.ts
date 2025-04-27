import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../product/product.service';
import { Router } from '@angular/router';
import { Product } from '../product/product.model';
import { CartService } from '../cart/cart.service';
@Component({
  selector: 'app-description',
  standalone: true,
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
   constructor(private router: Router, private productService: ProductService, private cartService: CartService) {}
   product: Product = this.productService.getSelectedProduct()!;
   get imagePath() {
    return 'assets/products/' + this.product.avatar ;
  }
  addToCard(){
    this.cartService.addProduct(this.product)
  }
}
