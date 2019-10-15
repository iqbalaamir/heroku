import {Component} from '@angular/core';
@Component({
	selector : 'tst',
	template :`
	   <input  #num parseInt (keyup.enter)="onKeyUp(num.value)"/><br>
        <button (click)="OnIncr(num.value)">Increment</button><br> 
        <button (click)="OnDecr(num.value)">Decrement</button><br> 
        <button (click)="OnSqr(num.value)">Square</button> <br>
        <button (click)="OnHalf(num.value)">Half</button> <br>


	`

})
export class testComponent{
	onKeyUp(num){
   console.log(num);}
   OnIncr(num){
   		num++;
		console.log("Output Incr:-"+num);
	}
	OnDecr(num){
		num--;
		console.log("Output Decr:-"+num);
	}
	OnSqr(num){
		num=num*num;
		console.log("Output Square:-"+num);
	}
	OnHalf(num){
		num=num/2;
		console.log("Output Half:-"+num);
	}
}