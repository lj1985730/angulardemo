import { Component, OnInit } from '@angular/core';
import { PersonService } from '../shared/person/person.service';
import { GiphyService} from "../shared/giphy/giphy.service";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  constructor(private personService: PersonService, private giphyService: GiphyService) { }

  persons : Array<any>;

  ngOnInit() {
    this.personService.getAll().subscribe(data => {
      this.persons = data;
      for(const person of this.persons) {
        this.giphyService.get(person.name).subscribe(url => person.giphyUrl = url);
      }
    });
  }

}
