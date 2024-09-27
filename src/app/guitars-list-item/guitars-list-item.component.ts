import {Component, Input, input} from '@angular/core';
import {Guitar} from "../models/guitar";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-guitars-list-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './guitars-list-item.component.html',
  styleUrl: './guitars-list-item.component.css'
})
export class GuitarsListItemComponent {
  @Input() guitar!: Guitar;
}
