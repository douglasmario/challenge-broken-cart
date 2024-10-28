import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../cart.service';
import { ProductService } from '../products.service'; // Doug: Imported the ProductService
import { Product } from '../products.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService // Doug: Added ProductService to constructor

) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Doug: getting the route ID
    this.productService.getProducts().subscribe(products => {
      this.product = products.find(p => p.id === id); // Doug: Searching for product by ID
    });

  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
