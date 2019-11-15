import {Component} from '@angular/core';
@Component({
  selector : 'eval',
  template :`./form.html`

})
export class form{
  log(val){
    console.log(val);
  }
  accept(){
    alert("data submitted");
  }

}