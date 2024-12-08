import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { MyOrderComponent } from '../my-order/my-order.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-home',
  imports: [SideNavComponent,MyOrderComponent,DashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
