import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
})
export class PersonDetailsComponent implements OnInit {
  currentPerson = null;
  message = '';

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getPerson(this.route.snapshot.paramMap.get('id'));
  }

  getPerson(id): void {
    this.personService.get(id).subscribe(
      (data) => {
        this.currentPerson = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updatePerson(): void {
    this.personService
      .update(this.currentPerson[0].id, this.currentPerson[0])
      .subscribe(
        (response) => {
          console.log(response);
          this.message = 'The person was updated successfully!';
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deletePerson(): void {
    this.personService.delete(this.currentPerson[0].id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/persons']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
