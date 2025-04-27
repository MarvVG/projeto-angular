import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from '../product/product.model';
import { CartService } from './cart.service';
import { ProductService } from '../product/product.service';
@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartProducts: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService,private productService: ProductService) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartProducts = this.cartService.getCartProducts();
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalPrice = this.cartProducts.reduce((acc, product) => acc + parseFloat(product.price), 0);
  }

  removeFromCart(productId: string) {
    this.cartService.deleteProductById(productId);
    this.productService.setCardDecrease();
    this.loadCart();
  }
  imagePath(id: string) {
    const product = this.cartProducts.find(p => p.id === id)!;
    return 'assets/products/' + product.avatar ;
  }
}
