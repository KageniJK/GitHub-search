import { Component, OnInit } from '@angular/core';
import {Dev} from '../dev';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  searcher(search: string) {
    console.log(search);
  }

  constructor() { }

  ngOnInit() {
  }

}
