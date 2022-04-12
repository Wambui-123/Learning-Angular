import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
classMethod = 'btn btn-success'
otherMethod = 'blockquote text-center'
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.otherMethod = 'blockquote text-danger';
    }, 4000);
  }

}
