import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonsListComponent } from './components/persons-list/persons-list.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { AddPersonComponent } from './components/add-person/add-person.component';

const routes: Routes = [
  { path: '', redirectTo: 'persons', pathMatch: 'full' },
  { path: 'persons', component: PersonsListComponent },
  { path: 'persons/:id', component: PersonDetailsComponent },
  { path: 'add', component: AddPersonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
