import {Component} from '@angular/core';
@Component({
	selector : 'ngfor',
	template :`<div *ngIf="arr.length>0">
	Array has{{arr.length}} Elements.</div>
	<br>
	Elements are {{arr}}.
	<div *ngIf="arr.length==0">
	Array is{{arr.length}} Empty


	</div> 
	`
})
export class DrctvComponent{
	arr=[1,2,3];
}
