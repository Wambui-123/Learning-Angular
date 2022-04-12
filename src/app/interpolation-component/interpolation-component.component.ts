import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-component',
  templateUrl: './interpolation-component.component.html',
  styleUrls: ['./interpolation-component.component.css']
})
export class InterpolationComponentComponent implements OnInit {
  name: string = 'Learning Angular';
  topics= ['event-binding', 'services', 'directives'];

constructor() {
  setTimeout(()=> {
    this.name = 'Introduction';
  }, 4000);
}
numberOfTopics = () => {
  return this.topics.length;
};
ngOnInit(): void {}
}
  