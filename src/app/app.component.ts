import { Component } from '@angular/core';
import wordsArray from "../utils/words";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words:any = '';
  limit:any  = 10;

  	handleSlideChange(newLimit : number){
  		this.limit = newLimit;
  	}

  	generate() {
  		let begin:number = Math.floor(Math.random()*5)+5;
  		let end:number = begin + parseInt(this.limit);
  		if(end > 50) {
  			let diff = end - 50;
  			begin = begin - diff;
  			end = begin + parseInt(this.limit);
  		}

  		//Setting Range of Words from the Array
  		this.words = wordsArray.slice(begin,end).join(' ');
  		
  	}
}
