import { Injectable } from '@angular/core';
import {map, Observable, of} from "rxjs";
import {Guitar} from "./models/guitar";
import {GUITARS} from "./data/mock-content";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GuitarService {
  private apiUrl = '/api/guitars';

  constructor(private http: HttpClient) {}

  getGuitars(): Observable<Guitar[]> {
    return this.http.get<Guitar[]>(this.apiUrl);
  }

  // Get guitar from ID
  getGuitarById(id: number): Observable<Guitar> {
    return this.http.get<Guitar>(`${this.apiUrl}/${id}`);
  }

  // Add new guitar to array
  addGuitar(guitar:Guitar): Observable<Guitar> {
    return this.http.post<Guitar>(this.apiUrl, guitar);
  }

  // Update an existing guitar
  updateGuitar(guitar: Guitar): Observable<Guitar> {
    return this.http.put<Guitar>(`${this.apiUrl}/${guitar.id}`, guitar);
  }

  // Remove guitar using ID
  removeGuitar(id: number): Observable<Guitar> {
    return this.http.delete<Guitar>(`${this.apiUrl}/${id}`);
  }

  generateNewId(): Observable<number> {
    return this.getGuitars().pipe(
      map(guitars => guitars.length > 0 ? Math.max(...guitars.map(guitar => guitar.id)) + 1 : 1)
    );
  }
}
