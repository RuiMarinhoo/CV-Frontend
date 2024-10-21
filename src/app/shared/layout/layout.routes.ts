import { Routes } from '@angular/router';
import {DashboardComponent} from "../../routes/dashboard/dashboard.component";
import {CreateComponent} from "../../routes/create/create.component";
import {HomeComponent} from "../../routes/home/home.component";


export const layout_routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "create",
    component: CreateComponent
  }
];
