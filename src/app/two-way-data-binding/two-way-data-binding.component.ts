import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule  } from '@angular/core';
@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {
someText = '';
  constructor() { }

  ngOnInit(): void {
  }

}
