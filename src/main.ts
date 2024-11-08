import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes} from "@angular/router";
import { AppComponent } from './app/app.component';
import { GuitarsListComponent } from "./app/guitars-list/guitars-list.component";
import { GuitarsListItemComponent } from "./app/guitars-list-item/guitars-list-item.component";
import { PageNotFoundComponent } from "./app/page-not-found/page-not-found.component";
import { ModifyListItemComponent } from "./app/modify-list-item/modify-list-item.component";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule, InMemoryDbService} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/in-memory-data.service";

const routes: Routes = [
  { path: 'guitars', component: GuitarsListComponent },
  { path: 'guitars/:id', component: GuitarsListItemComponent },
  { path: 'modify-guitar', component: ModifyListItemComponent },
  { path: 'guitars/:id/edit', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 }))
  ],
}).then(r => console.log('Bootstrap successful'))
