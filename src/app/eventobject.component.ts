import {Component} from '@angular/core';
@Component({
	selector : 'evt',
	template :`
        <button (click)="OnMyClick($event)">Click button</button> 
	`

})
export class EvtobjComponent{
	OnMyClick($event){
		console.log("button Clicked",$event);
	}
}