import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{RouterLink, RouterModule, Routes} from'@angular/router';
// import { RoutingModule ,Routes} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HomeworkComponent } from './homework/homework.component';
import { ClassworkComponent } from './classwork/classwork.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { Routes } from './app-routing.module';
 const appRoutes:Routes=[
    {path:"home" , component:HomeComponent  },//localhost : 4200
    {path:"homework" , component:HomeworkComponent },
    // {path:"users/:id/:name" , component:UsersComponent },//inside "url"
    {path:"classwork" , component:ClassworkComponent  },
    {path:"**" , component:PagenotfoundComponent }
    // here we have to specify the path and to open components
    // ,CanActivate:[SivaServices]
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeworkComponent,
    ClassworkComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,RouterLink
  ],
  providers:  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
