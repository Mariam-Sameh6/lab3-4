import { Component } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import productList from '../../../assets/productList';
import { HighlighDirective } from '../../Directive/highligh.directive';
import { NgStyle } from '@angular/common';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HighlighDirective, NgStyle,ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  clientName:string="Mariam"
  ispurshaced : boolean = true

  Products: Iproduct[]
  constructor(){
    this.Products = productList
  }
 
}
