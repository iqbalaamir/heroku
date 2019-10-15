import { Component } from '@angular/core';

@Component({
	selector:'slt',
	template: `
   <button [style.backgroundColor]="clr?'blue':'red'">ONE</button>`

	
})
 export class StlComponent{
 clr=true;
 
 }