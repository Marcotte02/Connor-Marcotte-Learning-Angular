import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { Guitar } from "./models/guitar";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {GuitarsListComponent} from "./guitars-list/guitars-list.component";
import {GuitarService} from "./guitar.service";
import {GuitarsListItemComponent} from "./guitars-list-item/guitars-list-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf, GuitarsListComponent, GuitarsListItemComponent, AsyncPipe, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title: string = 'Guitar Store';
  sampleGuitar?: Guitar;

  constructor(private guitarService: GuitarService) {}

  ngOnInit(): void {
    this.getSampleGuitar();
  }

  getSampleGuitar(): void {
    const id = 1;
    this.guitarService.getGuitarById(id).subscribe((guitar) => {
      this.sampleGuitar = guitar;
    });
  }
}
