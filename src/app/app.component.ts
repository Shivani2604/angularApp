import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule,HeaderComponent,SideNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  displayForm: FormGroup | undefined;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.displayForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  // Submit method
  // onSubmit() {
  //   if (this.displayForm.valid) {
  //     console.log(this.displayForm.value);
  //   } else {
  //     console.log("Form is invalid!");
  //   }
  }

  // title = 'hello shivani';
  
// username:any;
// data=[{name:'simran',class:'10',roll_no:'12'}];
// getName(name:any){
//     alert("function called");
//   }
//   constructor(){};
//   ngOnInit():void{
// this.username='Simran'
//   }
//  show = "yes"
//  color="hhbjhjh";
//  week_days="jndkjnc";



// // loop
//  users=['shivani','simran','ankita','akriti','shweta','shruti','aashita'];
//  userDetails= [
//   {name:'shivani', email:'shivani@gmail.com', dob:'26/04/2002'},
//   {name:'simran', email:'simran@gmail.com', dob:'24/04/2002'},
//   {name:'ankita', email:'av@gmail.com', dob:'2/04/2002'},
//   {name:'akriti', email:'ak@gmail.com', dob:'6/04/2002'},
//   {name:'shweta', email:'shwe@gmail.com', dob:'16/04/2002'},
//   {name:'shriti', email:'shru@gmail.com', dob:'22/04/2002'},
//   {name:'aashita', email:'aai@gmail.com', dob:'1/04/2002'},
// ];
// // nested loop 
// details=[
//   { campanyname : 'ola' , phone:'12345'},
//   { campanyname : 'uber', phone:'11245'},
//   { campanyname : 'cab' , phone:'13345'},

// ]
//   titlename='mastermind';
//   colo="red";
// updateColor(){
//   this.color="blue"
// }
//  title = 'Basic Form';
//  data: any={};
//  getData(data:any){
//   console.warn(data)

//  }
//  resister(){
  
//  }
//  users=['shivani','simran','ankita','akriti','shweta','shruti','aashita'];
//  userDetails= [
//     {name:'shivani', email:'shivani@gmail.com', dob:'26/04/2002'},
//     {name:'simran', email:'simran@gmail.com', dob:'24/04/2002'},
//     {name:'ankita', email:'av@gmail.com', dob:'2/04/2002'},
//     {name:'akriti', email:'ak@gmail.com', dob:'6/04/2002'},
//     {name:'shweta', email:'shwe@gmail.com', dob:'16/04/2002'},
//     {name:'shriti', email:'shru@gmail.com', dob:'22/04/2002'},
//     {name:'aashita', email:'aai@gmail.com', dob:'1/04/2002'},
//   ];
//   color="pink";
//   week_days="monday";
  // title = 'Basic Form';
  //  data: any={};
  //  getData(data:any){
  //   console.warn(data)
  
  //  }
  //  resister(){
    
  //  }
  //  list:any[]=[];
  //  addTask(item:string){
  //   this.list.push({id:this.list.length, names:item});
  //   console.warn(this.list)

  //  }
  


