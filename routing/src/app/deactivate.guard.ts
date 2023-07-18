import { Router, CanActivateFn } from '@angular/router';
import { Component, Injectable } from '@angular/core';
// import { CanDeactivate, Router} from '@angular/router';
import { HomeworkComponent } from './homework/homework.component';

export const deactivateGuard: CanActivateFn = (route, state) => {
  return true;
};

// import { Observable } from 'rxjs';
// // import { StudentService } from './student.service';
// @Injectable({
//   providedIn: 'root'
// })
// export class StudentService implements CanActivateFn {
// //   isAuthenticated: any;

//   constructor(private StudentService: StudentService, private router: Router) { }
//   canDeactivate(component:HomeworkComponent):boolean{
//          if(Component.homework.$invalid){
//           return false
//          }else{
//           return true
//          }
// }

// }




