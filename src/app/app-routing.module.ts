import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { MainModule } from './page/main.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'alos-cv-generator',
    pathMatch: 'full'
  },
  {
    path: 'alos-cv-generator',
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MainModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
