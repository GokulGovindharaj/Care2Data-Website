import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product',
  imports: [MatIconModule, MatExpansionModule],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {

}
