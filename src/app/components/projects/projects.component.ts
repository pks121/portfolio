import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  router: Router;

  constructor(private routerr: Router){
    this.router = routerr;
  }



  links: {[key:string]: string} = {
    Fitness_Tracker_App: "https://github.com/pks121/fitness-tracker",
    E_Commerce_Project : "https://github.com/pks121/fitness-tracker",
    BMI_Calculator_App : "https://github.com/pks121/fitness-tracker",
    Russian_Tiles_App : "https://github.com/pks121/fitness-tracker",
    Hikers_watch : "https://github.com/pks121/HickersWatch"
  }

  goToProjectLink(link: string){
    console.log("link_name: "+ link);
    window.open (this.links[link], "_blank");
    console.log("navigated to : "+ this.links[link]);
  }

  project_details: any[] = [
    {
      image: 'assets/image/project_images/fitness_tracker.png',
      name: 'Fitness Tracker App',
      link_name: "Fitness_Tracker_App",
      tech_used: ['angular', 'java', 'spring', 'html', 'css', 'typescript'],
      description: 'This webApp allow users to track their fitness, set their goals, Customize their nutrition. It includes role-based authentication with latest spring 3 features used' ,
    },
    {
      image: 'assets/image/project_images/e_commerce.png',
      name: 'E-Commerce Project',
      link_name: "E_Commerce_Project",
      tech_used: ['angular', 'java', 'spring', 'html', 'css', 'typescript'],
      description: 'This webApp allow users to track their fitness, set their goals, Customize their nutrition. It includes role-based authentication with latest spring 3 features used' ,
    },
    {
      image: 'assets/image/project_images/bmi_calculator.jpg',
      name: 'BMI Calculator App',
      link_name: "BMI_Calculator_App",
      tech_used: ['flutter', 'java'],
      description: 'Using this webApp user can search, navigate different products, add/remove products from cart, also checkout products and more.' ,
    },
    {
      image: 'assets/image/project_images/russian_tiles.jpg',
      name: 'Russian Tiles App',
      link_name:"Russian_Tiles_App",
      tech_used: ['flutter'],
      description: 'basic russian conversations will help to interact in the country.' 
    },
    {
      image: 'assets/image/project_images/hikerswatch.jpg',
      name: "Hiker's watch ",
      link_name: "Hikers_watch",
      tech_used: ['flutter'],
      description: 'it shows exact location containing latitude, longitude, address etc.  of user using gps/mobile network.' ,
    },
   
    
  ]

}
