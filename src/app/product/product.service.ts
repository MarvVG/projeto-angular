import { Injectable } from '@angular/core';
import { DUMMY_PRODUCTS } from '../dummy-users';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private selectedProductId: string | null = null;
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable(); 

  setSelectedProduct(id: string) {
    this.selectedProductId = id;
  }

  getSelectedProduct() {
    return DUMMY_PRODUCTS.find(product => product.id === this.selectedProductId);
  }
  getCardCount(){
      return this.cartCountSubject.value;
  }
  setCardIncrease(){
    const currentCount = this.cartCountSubject.value;
    this.cartCountSubject.next(currentCount + 1); 
  }
  setCardDecrease(){
    const currentCount = this.cartCountSubject.value;
    this.cartCountSubject.next(currentCount - 1); 
  }
}
