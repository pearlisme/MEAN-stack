import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService{
    getProduct():Product{
        return new Product(101,'iphone',"the apple",1200.00)
    }
}