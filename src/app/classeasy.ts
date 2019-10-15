import { Component } from '@angular/core';

@Component({
	selector:'clss',
	template: `
   <button [ngClass]="{
    'btn':true,
    'btn-primary': true ,
    'active': isActive ,
    'state':isNotActive }">
   ONE</button>
   `

	
})
 export class clsss{
 isActive=true;
 isNotActive=true;
 
 }