import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users = [{name: 'Rui', age: '26'}, {name: 'Ricardo', age: '26'}];

  icons = true;

  constructor(private router: Router) {
    // console.table(this.users);
  }

  goTo(nav: any){
    this.router.navigate([nav]);
  }

  ngOnInit(): void {
    if (window.innerWidth <= 992){
      this.icons = false;
    }
  }

}
