import {Component, OnInit} from '@angular/core';
import {Guitar} from "../models/guitar";
import {GuitarsListItemComponent} from "../guitars-list-item/guitars-list-item.component";
import {NgForOf} from "@angular/common";
import {GUITARS} from "../data/mock-content";
import {GuitarService} from "../guitar.service";
import {Router} from "@angular/router";

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
  guitars: Guitar[] = [];

  constructor(
    private guitarService: GuitarService,
    private router: Router
) {}

  ngOnInit(): void {
    this.guitarService.getGuitars().subscribe(data => {
      this.guitars = data;
    })
  }

  deleteGuitar(id: number): void {
    this.guitarService.removeGuitar(id).subscribe(() => {
      this.guitars = this.guitars.filter(guitar => guitar.id !== id);
    });
  }

  editGuitar(id: number): void {
    this.router.navigate(['/guitars', id, 'edit']);
  }
}
