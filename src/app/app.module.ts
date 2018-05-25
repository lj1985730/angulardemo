import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PersonService } from './shared/person/person.service';
import {GiphyService} from "./shared/giphy/giphy.service";

import { RouterModule, Routes} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';

import { PersonListComponent } from './person-list/person-list.component';
import { PersonEditComponent } from './person-edit/person-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'person-list', pathMatch: 'full' },
  { path: 'person-list', component: PersonListComponent },
  { path: 'person-add', component: PersonEditComponent },
  { path: 'person-edit/:id', component: PersonEditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonEditComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PersonService, GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
