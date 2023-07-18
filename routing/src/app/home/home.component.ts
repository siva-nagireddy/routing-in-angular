import { Component} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor (private router: Router) {}
  title = 'github1';
  PresentAddress:any="";
  PermanentAddress:any="";
  City:any="";
  State:any="";
  Pincode:any="";
  Password:any="";
  Email:any="";
  checkbox:any="";
 
users:any={};
  formValidation: any;
  signupForm: any;

  Onsubmit(){

    //  alert("data saved")
     
  }
  navigate(){
    this.router.navigateByUrl('homework');
  }
  // ngOnInit():void{}

  // signupform = new FormGroup({

  // })
  // this.userValid = true;
  // this.loginAuth.settoken

}


