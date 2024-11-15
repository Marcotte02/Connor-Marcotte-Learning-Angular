import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes} from "@angular/router";
import { AppComponent } from './app/app.component';
import { GuitarsListComponent } from "./app/guitars-list/guitars-list.component";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule, InMemoryDbService} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/in-memory-data.service";

const routes: Routes = [
  { path: 'guitars', component: GuitarsListComponent },
  { path: 'guitars/:id',
    loadComponent: () =>
      import('./app/guitars-list-item/guitars-list-item.component').then(m => m.GuitarsListItemComponent) },
  { path: 'modify-guitar',
    loadComponent: () =>
      import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent) },
  { path: 'guitars/:id/edit',
    loadComponent: () =>
      import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent)},
  { path: '**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 }))
  ],
}).then(r => console.log('Bootstrap successful'))
