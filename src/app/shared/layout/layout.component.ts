import { Component } from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterModule} from "@angular/router";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule,HeaderComponent, SidebarComponent, FooterComponent, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  isLoading?: boolean;

  constructor(
    private router: Router,
  ) {

    // Spinner for lazyload modules
    router.events.forEach((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.isLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isLoading = false;
      }
    });


  }

  ngOnInit(): void { }

}
