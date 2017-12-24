import { Component } from '@angular/core';
import { HttpService } from "./http/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public httpService: HttpService) {
    console.log(this.httpService);
  }

}
