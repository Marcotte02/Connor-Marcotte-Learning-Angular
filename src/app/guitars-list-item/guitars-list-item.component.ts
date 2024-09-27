import {Component, Input, input} from '@angular/core';
import {Guitar} from "../models/guitar";

@Component({
  selector: 'app-guitars-list-item',
  standalone: true,
  imports: [],
  templateUrl: './guitars-list-item.component.html',
  styleUrl: './guitars-list-item.component.css'
})
export class GuitarsListItemComponent {
  @Input() guitar: Guitar = { id: 0, model: '', brand: '', price: 0, inStock: false };
}
