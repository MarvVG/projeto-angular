import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartCount = 0;
  constructor(private router: Router, private productService: ProductService) {
    this.productService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }
  goToCartSection(){
    this.router.navigate(['/cart']);
  }
  goToHomeSection(){
    this.router.navigate(['/']);
  }
}
