import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeworkComponent } from './homework/homework.component';
// import { ClassworkComponent } from './classwork/classwork.component';
// import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { HomeComponent } from './home/home.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static for(appRoutes: Routes): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }
}

export { Routes };
