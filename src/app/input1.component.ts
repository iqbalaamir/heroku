import { Component, Input } from '@angular/core';
@Component({
	selector:'bank-account',
	template:`Bank Name:{{bankname}}
	AccountId:{{id}}`
})

export class BankAccount {
	@Input() bankname:string;
	@Input('account-id') id:string;

}

@Component({
	selector:'app',
	template:`<bank-account bankname="SBI"        
	account-id="4747"></bank-account>`
})
export class App{

}