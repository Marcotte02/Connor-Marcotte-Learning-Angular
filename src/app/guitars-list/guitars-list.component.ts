import { Component } from '@angular/core';
import {Guitar} from "../models/guitar";
import {GuitarsListItemComponent} from "../guitars-list-item/guitars-list-item.component";
import {NgForOf} from "@angular/common";
import {GUITARS} from "../data/mock-content";

@Component({
  selector: 'app-guitars-list',
  standalone: true,
  imports: [
    GuitarsListItemComponent,
    NgForOf,
  ],
  templateUrl: './guitars-list.component.html',
  styleUrl: './guitars-list.component.css'
})
export class GuitarsListComponent {
  guitars: Guitar[] = GUITARS;
}
