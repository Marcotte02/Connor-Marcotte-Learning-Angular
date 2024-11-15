import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceWithTax',
  standalone: true
})
export class PriceWithTaxPipe implements PipeTransform {

  transform(price: number, taxRate: number = 0.13): string {
    const totalPrice = price + (price * taxRate);
    return `$${totalPrice.toFixed(2)} CAD (including tax)`;
  }
}
