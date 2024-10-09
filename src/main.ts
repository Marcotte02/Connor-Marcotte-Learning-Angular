import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes} from "@angular/router";
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { GuitarsListComponent} from "./app/guitars-list/guitars-list.component";
import { GuitarsListItemComponent} from "./app/guitars-list-item/guitars-list-item.component";

const routes: Routes = [
  { path: 'guitars', component: GuitarsListComponent },
  { path: 'guitars/:id', component: GuitarsListItemComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'))
