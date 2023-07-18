import { Component } from '@angular/core';
import{Router, RouterLink, RouterModule, Routes} from'@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'routing';
  newChange():void{
    this.router.navigateByUrl("classwork");
  }
}
