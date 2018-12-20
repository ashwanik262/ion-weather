import { Pipe, PipeTransform } from '@angular/core';
import {fahrenheitToCelsius} from 'temperature';

/**
 * Generated class for the CelciusPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
 @Pipe({
 	name: 'celcius',
 })
 export class CelciusPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
   transform(value: any, ...args) {
   	try{
   		if(value){
   			var cel = Math.round(fahrenheitToCelsius(value));
   			value=cel;
   		}else{

   		}
   	}catch(e){
   		console.log(e);
   	}
   	return value;
   }
}
