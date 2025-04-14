import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills: any[] = [
    {
      name: 'Java',
      star: 4.5,
      src: 'assets/java.svg'
    },
    {
      name: 'Spring boot',
      star: 4,
      src: 'assets/spring.svg'
    },
    {
      name: 'Microservices',
      star: 3,
      src: 'assets/microservices.svg'
    },
    {
      name: 'Angular',
      star: 4,
      src: 'assets/angular.svg'
    },
    {
      name: 'Python',
      star: 3,
      src: 'assets/python.svg'
    },
    {
      name: 'HTML',
      star: 4,
      src: 'assets/html.svg'
    },
    {
      name: 'CSS',
      star: 4.5,
      src: 'assets/css.svg'
    },
    {
      name: 'Typescript',
      star: 4,
      src: 'assets/typescript.svg'
    },
    {
      name: 'SQL',
      star: 4,
      src: 'assets/sql.svg'
    },
    {
      name: 'Postman',
      star: 4,
      src: 'assets/postman.svg'
    },
    {
      name: 'Selenium',
      star: 3.5,
      src: 'assets/selenium.svg'
    },
    {
      name: 'Cucumber',
      star: 3.5,
      src: 'assets/cucumber.svg'
    },

  ]

}
