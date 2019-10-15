import { Component, Input } from '@angular/core';
@Component({
	selector:'Registration',
	template:`Student-Name:{{name}}
	Registration-Id:{{id}}`
})

export class Registration {
	@Input() name:string;
	@Input('Registration-Id') id:string;

}

@Component({
	selector:'view',
	template:`<Registration name="Aamir"       
	Registration-Id="11716410"></Registration>`
})
export class view{

}