import { Component, OnInit } from '@angular/core';
import { ProductService } from '../controllers/product/product.service';
declare var jQuery: any;

@Component({
  selector: 'app-productsell',
  templateUrl: './productsell.component.html',
  styleUrls: ['./productsell.component.css']
})
export class ProductsellComponent implements OnInit {

  constructor(private productService: ProductService) { }

  //products: Product[]
  //quantity: any;

  ngOnInit(): void {
  /*   this.productService.read().subscribe(products => {
      this.products = products
      console.log(products) */
  };

  
 /* (function ($) {
    $(document).ready(function(){
      $('.quant').on("blur", Soma);
  
     function Soma(){
        var soma = 0;
         $('.quant').each(function(){
          var valorItem = parseFloat($(this).val());
  
          if(!isNaN(valorItem))
           soma *= parseFloat(this.valorItem);
        });

         $('#product-amount').val((soma).toFixed(2));
     }
   });
   })(jQuery); */
}
