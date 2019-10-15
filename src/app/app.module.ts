import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


/*import { StlComponent } from './stylebinding.component';
import { Evt1Component } from './event1.component';
import { EvtobjComponent } from './eventobject.component';
import { Evt3Component } from './bubble.component';
import { Evt23Component } from './bubble2.component';
import { TmpltComponent } from './template.component';
import { testComponent } from './test.component';
import { buttonComponent } from './5button.component';
import { DrctvComponent } from './drctv.component';
import {aComponent } from './a.component';*/
//import { SltComponent } from './ngstyle.component';
//import { clsss } from './classeasy';
import { twichcom } from './switch.component';
import { BankAccount } from './input1.component';
import { App } from './input1.component';
import { Registration } from './registration.component';
import { view } from  './registration.component';
import { boot } from './bootstrap.component';
@NgModule({
  declarations: [
    AppComponent,
    /*StlComponent,
    Evt1Component,
    EvtobjComponent,
    Evt3Component,
    Evt23Component,
    TmpltComponent,
    testComponent,
    buttonComponent,
    DrctvComponent,
    aComponent,
    SltComponent*/
    //clsss
    twichcom,
    BankAccount,App
    ,Registration,view,boot
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
