import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Guitar} from "./models/guitar";
import {GUITARS} from "./data/mock-content";

@Injectable({
  providedIn: 'root'
})
export class GuitarService {
  private guitars = GUITARS;

  constructor() { }

  getGuitars(): Observable<Guitar[]> {
    return of(GUITARS);
  }

  // Get guitar from ID
  getGuitarById(guitarId: number): Observable<Guitar | undefined>{
    const guitar = this.guitars.find(guitar => guitar.id === guitarId);
    return of(guitar);
  }

  // Add new guitar to array
  addGuitar(newGuitar:Guitar): Observable<Guitar[]> {
    this.guitars.push(newGuitar);
    return of(this.guitars);
  }

  // Update an existing guitar
  updateGuitar(updatedGuitar: Guitar): Observable<Guitar[]> {
    const index = this.guitars.findIndex(guitar => guitar.id === updatedGuitar.id)
    if (index !== -1) {
      this.guitars[index] = updatedGuitar;
    }
    return of(this.guitars);
  }

  // Remove guitar using ID
  removeGuitar(id: number): Observable<Guitar | undefined> {
    const index = this.guitars.findIndex(guitar => guitar.id === id);
    if (index !== -1) {
      const removedGuitar = this.guitars.splice(index, 1)[0];
      return of(removedGuitar);
    }
    return of(undefined);
  }
}
