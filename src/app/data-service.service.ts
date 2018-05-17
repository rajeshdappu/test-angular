import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceService {

  brands:any = ['Gap','Banana Republic','Boss','Hugo Boss','Taylor','Rebecca Taylor'];
  clothingTypes:any = ['Denim','Pants','Sweaters','Skirts','Dresses'];


  public getFormattedData(input:any){

    if(!input) return '';

    let inpUpperCase = input.toUpperCase();
      this.brands.forEach(brand=>{
          if(inpUpperCase.indexOf(brand.toUpperCase()) !== -1){
            console.log(brand);
            input = this.replaceAll(
              input,
                input.substr(
                inpUpperCase.indexOf(brand.toUpperCase()),
                inpUpperCase.indexOf(brand.toUpperCase()) + brand.length
              ),
              '<b>'+input.substr(
                inpUpperCase.indexOf(brand.toUpperCase()),
                inpUpperCase.indexOf(brand.toUpperCase()) + brand.length
              )+'</b>'
            );
    
          }
      });

      this.clothingTypes.forEach(type=>{
        if(inpUpperCase.indexOf(type.toUpperCase()) !== -1){
          console.log(type);
          input = this.replaceAll(
            input,
              input.substr(
              inpUpperCase.indexOf(type.toUpperCase()),
              inpUpperCase.indexOf(type.toUpperCase()) + type.length
            ),
            '<i>'+input.substr(
              inpUpperCase.indexOf(type.toUpperCase()),
              inpUpperCase.indexOf(type.toUpperCase()) + type.length
            )+'</i>'
          );
  
        }
    });

  return input;
  }

  private replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  constructor() { }

}
