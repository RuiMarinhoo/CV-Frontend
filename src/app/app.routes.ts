import { Routes } from '@angular/router';
import {LayoutComponent} from "./shared/layout/layout.component";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./shared/layout/layout.routes').then(mod => mod.layout_routes)
  }
];
