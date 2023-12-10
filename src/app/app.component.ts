import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend-portfolio';
  showMenu: boolean = false;
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }


  age!: any;
  dob: Date = new Date("07-31-2000");
  myAge: string = '';
  filmanager!:FileReader;

  ngOnInit() {
    const today: Date = new Date();
    var months: number = today.getMonth()-this.dob.getMonth();
    var day: number = today.getDate() - this.dob.getDate();
    this.age = today.getFullYear() - this.dob.getFullYear();
    if( months < 0){
      this.age --;
      months = 12 - months;
    }
    else if(months == 0 && day < 0){
      this.age -=1
    }
    this.myAge = `${this.age} years ${months-1} months`
    // console.log("age: ", this.age, "years", months -1, "months and ", today.getDate(), "days" );

  }



}
