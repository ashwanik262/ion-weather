import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

/**
 * Generated class for the UtcTimePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'utcTime',
})
export class UtcTimePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, ...args) {
  	try{
  		if(value){
  			var day = moment.unix(value);
  			value=day;



  		}else{

  		}
  	}catch(e){
  		console.log(e);
  	}
    return value;
  }
}
