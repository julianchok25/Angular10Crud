import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css'],
})
export class PersonsListComponent implements OnInit {
  persons: any;
  currentPerson = null;
  currentIndex = -1;
  fullname = '';

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.retrievePersons();
  }

  retrievePersons(): void {
    this.personService.getAll().subscribe(
      (data) => {
        this.persons = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.retrievePersons();
    this.currentPerson = null;
    this.currentIndex = -1;
  }

  setActivePerson(person, index): void {
    this.currentPerson = person;
    this.currentIndex = index;
  }
}
