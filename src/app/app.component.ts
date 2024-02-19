import { Component } from '@angular/core';
import { ApiMatchesService } from './api-matches.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DefineLab-Task';
  collapsed: boolean = false;
  Menutype: string = 'default';
  constructor(private apiService: ApiMatchesService) { }
  toggletButton() {
    this.collapsed = !this.collapsed;

  }

}

