import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  goToProjectLink(link: string){

  }

  project_details: any[] = [
    {
      image: 'assets/image/project_images/fitness_tracker.png',
      name: 'Fitness Tracker App',
      tech_used: ['angular', 'java', 'spring', 'html', 'css', 'typescript'],
      description: 'This webApp allow users to track their fitness, set their goals, Customize their nutrition. It includes role-based authentication with latest spring 3 features used' ,
    },
    {
      image: 'assets/image/project_images/e_commerce.png',
      name: 'E-Commerce Project',
      tech_used: ['angular', 'java', 'spring', 'html', 'css', 'typescript'],
      description: 'This webApp allow users to track their fitness, set their goals, Customize their nutrition. It includes role-based authentication with latest spring 3 features used' ,
    },
    {
      image: 'assets/image/project_images/bmi_calculator.jpg',
      name: 'BMI Calculator App',
      tech_used: ['angular', 'java', 'spring', 'html', 'css', 'typescript'],
      description: 'Using this webApp user can search, navigate different products, add/remove products from cart, also checkout products and more.' ,
    },
    {
      image: 'assets/image/project_images/russian_tiles.jpg',
      name: 'Russian Tiles App',
      tech_used: ['angular', 'java', 'spring', 'html', 'css', 'typescript'],
      description: 'basic russian conversations will help to interact in the country.' 
    },
    {
      image: 'assets/image/project_images/hikerswatch.jpg',
      name: "Hiker's watch ",
      tech_used: ['angular', 'java', 'spring', 'html', 'css', 'typescript'],
      description: 'it shows exact location containing latitude, longitude, address etc.  of user using gps/mobile network.' ,
    },
   
    
  ]

}
