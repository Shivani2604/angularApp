import { Component, OnInit } from '@angular/core';
// import { FeaturedburgerService } from '../featuredburger.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  imports: [HttpClientModule], // Import HttpClientModule here
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  burgers: any[] = [];  
  // constructor(private burgerService: FeaturedburgerService) {}

  ngOnInit(): void {
  //  this.burgerService.getBurgers().subscribe((data)=>{
  //   console.log(data);
  //  })
  }

}
