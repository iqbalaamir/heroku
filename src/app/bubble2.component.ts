import {Component} from '@angular/core';
@Component({
	selector : 'evt1',
	template :`<div (click)="OnDivClk">
	<button (click)="OnMyClick($event)">Click button</button> 
	`
})
export class Evt23Component{
   OnDivClk()
   {
   	console.log("Div created");
   }
	OnMyClick($event){
		//$event.stopPropagation();//to stop the propogation of both the event at same time
		console.log("button Clicked",$event);
	}
}
