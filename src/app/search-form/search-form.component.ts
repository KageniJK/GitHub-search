import { Component, OnInit } from '@angular/core';
import {Dev} from '../dev';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  searcher(search: string) {
    const y = 'https://api.github.com/users/' + search;
    console.log(y);
  }

  constructor() { }

  ngOnInit() {
  }

}
