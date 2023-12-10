import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills: any[] = [
    {
      name: 'Angular',
      star: 4.5,
      src: 'assets/angular.svg'
    },
    {
      name: 'Java',
      star: 3.5,
      src: 'assets/java.svg'
    },
    {
      name: 'Spring',
      star: 3.5,
      src: 'assets/spring.svg'
    },
    {
      name: 'Python',
      star: 3.5,
      src: 'assets/python.svg'
    },
    {
      name: 'HTML',
      star: 3.5,
      src: 'assets/html.svg'
    },
    {
      name: 'CSS',
      star: 4.5,
      src: 'assets/css.svg'
    },
    {
      name: 'Typescript',
      star: 5,
      src: 'assets/typescript.svg'
    },
    {
      name: 'SQL',
      star: 5,
      src: 'assets/sql.svg'
    },
    {
      name: 'Postman',
      star: 3.5,
      src: 'assets/postman.svg'
    },
    {
      name: 'Flutter',
      star: 3.5,
      src: 'assets/flutter.svg'
    },

  ]

}
