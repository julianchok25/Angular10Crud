import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { PersonsListComponent } from './components/persons-list/persons-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    PersonDetailsComponent,
    PersonsListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
