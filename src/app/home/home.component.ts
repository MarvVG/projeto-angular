import { Component } from '@angular/core';
import { DUMMY_PRODUCTS } from '../dummy-users';
import { ProductComponent } from '../product/product.component';
import { Router } from '@angular/router';
import { ProductService } from '../product/product.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = DUMMY_PRODUCTS
  selectedProductId?: string;
  get selectedUser(){
    return this.products.find((product)=>product.id === this.selectedProductId)!;
  }
  constructor(private router: Router, private productService: ProductService) {}
  onSelectProduct(id: string) {
    this.productService.setSelectedProduct(id);
    this.router.navigate(['/description']);
  }
}
