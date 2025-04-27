import { Injectable } from '@angular/core';
import { Product } from '../product/product.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProducts: Product[] = [];
  private cartProductsSubject = new BehaviorSubject<Product[]>([]);

  cartProducts$ = this.cartProductsSubject.asObservable();
  constructor(private router: Router, private productService: ProductService) {}
  addProduct(product: Product) {
    this.productService.setCardIncrease();
    this.cartProducts.push(product);
    this.cartProductsSubject.next(this.cartProducts);
  }
  deleteProductById(productId: string) {
    this.cartProducts = this.cartProducts.filter(p => p.id !== productId);
    this.cartProductsSubject.next(this.cartProducts);
  }
  getCartProducts(): Product[] {
    return [...this.cartProducts];
  }
  clearCart() {
    this.cartProducts = [];
    this.cartProductsSubject.next(this.cartProducts);
  }
}
