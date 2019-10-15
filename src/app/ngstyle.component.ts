import { Component } from '@angular/core';

@Component({
	selector:'slt',
	template: `
   <button [ngStyle]="{
    'backgroundColor':bkclr1,
    'color':bkclr,
    'fontWeight':wght}">
   ONE</button>
   `

	
})
 export class SltComponent{
 bkclr1="red";
 bkclr="green";
 wght="bold";
 
 }