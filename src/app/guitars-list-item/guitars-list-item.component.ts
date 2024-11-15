import {Component, Input, input} from '@angular/core';
import {Guitar} from "../models/guitar";
import {CurrencyPipe, DatePipe, NgIf, UpperCasePipe} from "@angular/common";
import {PriceWithTaxPipe} from "../pipes/price-with-tax.pipe";

@Component({
  selector: 'app-guitars-list-item',
  standalone: true,
  imports: [
    NgIf,
    DatePipe,
    UpperCasePipe,
    CurrencyPipe,
    PriceWithTaxPipe
  ],
  templateUrl: './guitars-list-item.component.html',
  styleUrl: './guitars-list-item.component.css'
})
export class GuitarsListItemComponent {
  @Input() guitar!: Guitar;
}
