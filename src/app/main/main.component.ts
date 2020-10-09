import {Component, OnInit} from '@angular/core';
import {TestService} from '../services/test.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private testService: TestService) {
  }

  username: string;

  ngOnInit(): void {
    this.testService.getTestString().subscribe(response => {
      console.log('First name: ' + response.FirstName);
      this.username = response.FirstName;
    });
  }

}
