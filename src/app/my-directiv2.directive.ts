import { Directive, Input, ElementRef, OnInit, Output, HostListener, EventEmitter, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyDirectiv2]'
})
export class MyDirectiv2Directive implements OnInit{

  @Input('clickColor') color:string
  myElement
  @Output()myClick = new EventEmitter<string>()
  @HostBinding('class.host') host =true
  @HostBinding('style.border-color') border:string

  constructor(element:ElementRef) {
    this.myElement = element.nativeElement
    this.myElement.style.color = this.color
    
    
   }
  ngOnInit(): void {
    this.myElement.style.background = this.color
    
  }

  @HostListener('click')click(){
    
    
    // alert(`my color of click is : ${this.color}`)
    this.myClick.emit(`my click is click ${this.color}`)
    this.host = !this.host
    this.border = this.host ? "yellow":"red"
    console.log(this.host);
  }

 
  
}
