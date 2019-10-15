import {Component} from '@angular/core';
@Component({
	selector : 'subject',
	template :`
        <button (click)="OnMyClick()">Click button</button> 
	`

})
export class Evt1Component{
	OnMyClick(){
		console.log("button Clicked");
	}
}