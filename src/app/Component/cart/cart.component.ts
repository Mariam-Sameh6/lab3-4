import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Iproduct } from '../../Models/iproduct';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  productsCart : Iproduct[] = []
  constructor(private cartservice: CartService){}
  ngOnInit(): void {
      this.cartservice.productsCart$.subscribe((cart) => {
      this.productsCart = cart;
    });
  }
  addToCart(product: Iproduct) {
    this.cartservice.addToCart(product);
  }

}
