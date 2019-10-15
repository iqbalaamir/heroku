import {Component} from '@angular/core';
@Component({
	selector : 'a',
	template :`<div *ngIf="a.length>=5||a.length<=8">
	string is{{a}} .</div>
	<br></div>
	
	<div *ngIf="a.length<5||a.length>8">
	Not acceptable</div>

	<div *ngIf="b>=20||b<=50">
	Age is {{b}}.</div>

	<div *ngIf="b<20||b>50"
	Age is eligible;


	</div> 
	`
})
export class aComponent{
	a='Aamir';
}
