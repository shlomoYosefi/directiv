import { Component, OnInit } from '@angular/core';
import { NyserviesService } from '../nyservies.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {


  constructor(public myServe:NyserviesService) { }

  ngOnInit(): void {
  }

}
