import { Component, Input } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { CurrencyPipe, NgStyle, TitleCasePipe } from '@angular/common';
import { HighlighDirective } from '../../Directive/highligh.directive';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgStyle,HighlighDirective, CurrencyPipe, TitleCasePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  shadow:string = 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
  discount:number = 80
 // ispurshaced : boolean = true

@Input() product!:Iproduct
constructor(private cartservice: CartService){}
addProduct(event:MouseEvent, product: Iproduct){
  event.stopPropagation()
  this.cartservice.addToCart(product)
}

/*logoDisplay(product:Iproduct){
  //this.ispurshaced = !this.ispurshaced
  product.quantity--;
  
}*/

}
