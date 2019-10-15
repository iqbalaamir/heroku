import {Component} from '@angular/core';
@Component({
	selector : 'butt',
	template :`
        <button (click)="OnMyClick($event)">Click button</button> 
        <button (blur)="OnIncr($blur)">Blur</button><br> 
        <button (dblclick)="OnDecr($double)">double</button><br> 
        <button (focus)="OnSqr($focus)">Focus</button> <br>
	`

})
export class buttonComponent{
	OnMyClick($event){
		console.log("button Clicked",$event);
	}
  
   }

