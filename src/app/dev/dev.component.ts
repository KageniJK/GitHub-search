import { Component, OnInit } from '@angular/core';
import { Dev } from '../dev';
import { DevRequestService } from './dev-request.service';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css'],
  providers: [ DevRequestService ]
})
export class DevComponent implements OnInit {

  dev: Dev;

  constructor(private devService: DevRequestService) { }

  ngOnInit() {
    this.devService.createUrl();
    this.devService.devRequest();
    this.dev = this.devService.dev;
  }


}
