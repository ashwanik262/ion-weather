import { Pipe, PipeTransform } from '@angular/core';
import * as d2d from 'degrees-to-direction';

/**
 * Generated class for the D2dPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'd2d',
})
export class D2dPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
    transform(value: any, ...args) {
   	try{
   		if(value){
   			var direction = d2d(value);;
   			console.log("d2d is ",direction);
   			value=direction;
   		}else{

   		}
   	}catch(e){
   		console.log(e);
   	}
   	return value;
   }
}
