import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ny-component',
  templateUrl: './ny-component.component.html',
  styleUrls: ['./ny-component.component.css']
})
export class NyComponentComponent implements OnInit {


  arrNumber:number[]=[1,2,3,4,5,6,7]

  constructor() { }

  ngOnInit(): void {
  }

}
