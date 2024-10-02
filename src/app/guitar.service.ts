import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Guitar} from "./models/guitar";
import {GUITARS} from "./data/mock-content";

@Injectable({
  providedIn: 'root'
})
export class GuitarService {

  constructor() { }

  getGuitars(): Observable<Guitar[]> {
    return of(GUITARS);
  }
}
