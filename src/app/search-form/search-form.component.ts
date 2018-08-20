import { Component, OnInit } from '@angular/core';
import {Dev} from '../dev';
import {HttpClient} from '@angular/common/http';
import {DevRequestService} from '../dev/dev-request.service';
import {Repo} from '../repo';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  const repo = new Repo('');
  constructor(private http: HttpClient) { }
  searcher(search: string) {
    const y = 'https://api.github.com/users/' + search + '/repos' ;
    console.log(y);
    this.http.get(y).subscribe(data => {
       // Successful API request.
       this.repo = data;
       // console.log(dev.repo);
   });
    // this.http.get<RepoResponse>(environment.repoApi).toPromise().then(response => {
    //   this.dev.repo = response; };
  }



  ngOnInit() {
  }

}
