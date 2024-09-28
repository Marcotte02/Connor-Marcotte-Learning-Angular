import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Guitar } from "./models/guitar";
import {NgForOf, NgIf} from "@angular/common";
import {GuitarsListComponent} from "./guitars-list/guitars-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf, GuitarsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Guitar Store';
}
