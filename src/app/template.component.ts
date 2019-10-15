import {Component} from '@angular/core';
@Component({
	selector : 'test',
	template :`<input #email (keyup.enter)="onKeyUp(email.value)"/>
	`
})
export class TmpltComponent{
   onKeyUp(email){
   console.log(email);}
}
