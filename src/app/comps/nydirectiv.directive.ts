import { Directive, HostListener, ElementRef } from '@angular/core';
import { NyserviesService } from './nyservies.service';

@Directive({
  selector: '[appNydirectiv]'
})
export class NydirectivDirective {

  constructor(private myElement:ElementRef ,private myServe:NyserviesService) { }


  @HostListener("mouseenter") mouseEnter(){
    this.myElement.nativeElement.style.background = 'red'
    this.myServe.counterMouse++
  }

  @HostListener("click") clichEnter(){
    this.myElement.nativeElement.style.background = 'green'
    this.myServe.counterClick++
  }

}
