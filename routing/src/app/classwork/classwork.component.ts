import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-classwork',
  templateUrl: './classwork.component.html',
  styleUrls: ['./classwork.component.css']
})
export class ClassworkComponent {
  maths!:number;
  science!:number;
  english!:number;
  marks!:number;
  constructor (private router: Router) {}
users={};
  navigate(){
    this.router.navigateByUrl("Pagenotfound")
  
}
markValidation(science:number){
if(science>35 ){
  alert("you passed ready to go nxt page")
}else{
  alert('failed in science')
}
}
markValidation1(maths:number){
  if(maths>35 ){
    alert("you passed ready to go nxt page")
  }else{
    alert("failed in maths")
    // break;
  }
  }
  markValidation2(english:number){
    if(english>35 ){
      alert("you passed ready to go nxt page")
    }else{
      alert("failed in english")
    }
    }
}
