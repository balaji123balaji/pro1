import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  text_mgs:string;
  public loading = false;
}
