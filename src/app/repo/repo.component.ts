import { Component, OnInit } from '@angular/core';
import { Dev } from '../dev';
import { DevRequestService } from '../dev/dev-request.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
  providers: [ DevRequestService ]
})
export class RepoComponent implements OnInit {
  dev: Dev;
  constructor(private devService: DevRequestService) { }

  ngOnInit() {
    this.devService.userRepoRequest();
    this.dev = this.devService.dev;
  }

}
