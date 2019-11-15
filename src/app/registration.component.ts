import { Component, Input } from '@angular/core';
@Component({
	selector:'Registration',
	template:`Student-Name:<form><input value="{{name}}"></form>
	Contact-no:<form><input value="{{id}}"></form><br>
	update Name
	 <input  #naam parseInt (keyup.enter)="onKeyUp(naam.value)"/><br>
        <button (click)="OnIncr(num.value)">update</button><br> `
})

export class Registration {
	@Input() name:string;
	@Input('Contact-no') id:string;
	onKeyUp(num){
   console.log(num);}
   OnIncr(naam){
   		naam;
		console.log("Updated info"+name);
	}


}

@Component({
	selector:'view',
	template:`<Registration name="Aamir"    
	Contact-no="8484867661"></Registration>`
})
export class view{

}