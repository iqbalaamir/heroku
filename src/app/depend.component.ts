import {Component} from '@angular/core';
import {service} from './aamir.service';
@Component({
	selector : 'subject',
	template : '<h2></h2>	<ul> <li *ngFor="let cr of courses"> {{courses}} </li></ul>'

})
export class CoursesComponent{
	courses;
	constructor (oiu:service){
		
		this.courses=oiu.getService();
	}
}