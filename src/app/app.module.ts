import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NyComponentComponent } from './comps/ny-component/ny-component.component';
import { NydirectivDirective } from './comps/nydirectiv.directive';
import { ResultComponent } from './comps/result/result.component';
import { MyDirectiv2Directive } from './my-directiv2.directive';

@NgModule({
  declarations: [
    AppComponent,
    NyComponentComponent,
    NydirectivDirective,
    ResultComponent,
    MyDirectiv2Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
