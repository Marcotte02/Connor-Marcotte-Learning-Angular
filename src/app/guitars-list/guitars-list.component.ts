import {Component, OnInit} from '@angular/core';
import {Guitar} from "../models/guitar";
import {GuitarsListItemComponent} from "../guitars-list-item/guitars-list-item.component";
import {NgForOf} from "@angular/common";
import {GUITARS} from "../data/mock-content";
import {GuitarService} from "../guitar.service";

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
export class GuitarsListComponent implements OnInit{
  guitars: Guitar[] = GUITARS;

  constructor(private guitarService: GuitarService) {}

  ngOnInit(): void {
    this.getGuitars();
  }

  getGuitars(): void {
    this.guitarService.getGuitars().subscribe((guitars) => {
      this.guitars = guitars;
    });
  }
}
