import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes} from "@angular/router";
import { AppComponent } from './app/app.component';
import { GuitarsListComponent } from "./app/guitars-list/guitars-list.component";
import { GuitarsListItemComponent } from "./app/guitars-list-item/guitars-list-item.component";
import { PageNotFoundComponent } from "./app/page-not-found/page-not-found.component";
import { ModifyListItemComponent } from "./app/modify-list-item/modify-list-item.component";

const routes: Routes = [
  { path: 'guitars', component: GuitarsListComponent },
  { path: 'guitars/:id', component: GuitarsListItemComponent },
  { path: 'modify-guitar', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'))
