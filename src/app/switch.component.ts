import { Component } from '@angular/core';

@Component({
	selector:'twich',
	template: `
   <div [ngSwitch]="section">
   <div *ngSwitchCase="'D1501'">Fourth Year</div>
   <div *ngSwitchCase="'D1401'"> Fifth Year </div>
   <div *ngSwitchDefault> oops! no data</div>
   </div>
   `

	
})
 export class twichcom{
 section="D1101";
 
 }