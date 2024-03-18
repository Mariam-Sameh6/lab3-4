import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productsCartSubject = new BehaviorSubject<Iproduct[]>([]);
  productsCart$ = this.productsCartSubject.asObservable();

  addToCart(product: Iproduct) {
    const currentCart = this.productsCartSubject.value;
    const existingProduct = currentCart.find((p) => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
      product.quantity -= 1;
      
    } else {
      currentCart.push({...product, quantity: 1 });
      product.quantity -= 1;
      
    }

    this.productsCartSubject.next([...currentCart]);
  }
 /*private productCurrentCart = new BehaviorSubject<Iproduct[]>([])
 productCart$ = this.productCurrentCart.asObservable()
  addToCart(product: Iproduct){
   
    let currantCart = this.productCurrentCart.value
    let currantproduct = currantCart.find((x)=>x.id === product.id)
    if(currantproduct){
      console.log(currantproduct)
      currantproduct.quantity+=1
      product.quantity-=1
    }
    else{
      console.log('else')
      currantCart.push({...product, quantity:1})
      product.quantity-=1
    }
    this.productCurrentCart.next([...currantCart]);
    
  }*/
  
  //constructor() { }
}
