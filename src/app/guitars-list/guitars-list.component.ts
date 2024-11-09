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
  error: string | null = null;

  constructor(
    private guitarService: GuitarService,
    private router: Router
) {}

  ngOnInit(): void {
    this.guitarService.getGuitars().subscribe({
      next: data => {
        this.guitars = data;
      },
      error: (err) => {
        this.error = 'Failed to load guitars.';
        console.error(err);
      }
    });
  }

  deleteGuitar(id: number): void {
    this.guitarService.removeGuitar(id).subscribe({
      next: () => {
        this.guitars = this.guitars.filter(guitar => guitar.id !== id);
      },
      error: (err) => {
        this.error = 'Failed to delete guitar.';
        console.error(err);
      }
    });
  }

  editGuitar(id: number): void {
    this.router.navigate(['/guitars', id, 'edit']);
  }
}
