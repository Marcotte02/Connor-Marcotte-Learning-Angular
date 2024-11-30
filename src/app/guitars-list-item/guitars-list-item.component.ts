import {Component, Input, input} from '@angular/core';
import {Guitar} from "../models/guitar";
import {CurrencyPipe, DatePipe, NgClass, NgIf, UpperCasePipe} from "@angular/common";
import {PriceWithTaxPipe} from "../pipes/price-with-tax.pipe";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-guitars-list-item',
  standalone: true,
  imports: [
    NgIf,
    DatePipe,
    UpperCasePipe,
    CurrencyPipe,
    PriceWithTaxPipe,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    NgClass
  ],
  templateUrl: './guitars-list-item.component.html',
  styleUrl: './guitars-list-item.component.css'
})
export class GuitarsListItemComponent {
  @Input() guitar!: Guitar;
}
