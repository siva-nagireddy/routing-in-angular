import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent {
  constructor (private router: Router) {}

  // Onsubmit(){
  //    alert("data saved")
     navigate(){
      
        this.router.navigateByUrl("classwork")
     
  }

}

