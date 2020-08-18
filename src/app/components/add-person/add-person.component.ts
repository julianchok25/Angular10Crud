import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent implements OnInit {
  person = {
    fullname: '',
    birth: '',
  };
  submitted = false;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {}

  savePerson(): void {
    const data = {
      fullname: this.person.fullname,
      birth: this.person.birth,
    };

    this.personService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newPerson(): void {
    this.submitted = false;
    this.person = {
      fullname: '',
      birth: '',
    };
  }
}
