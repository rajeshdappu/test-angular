import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataServiceService } from './data-service.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  showFormattedData = false;

  constructor(private dataService:DataServiceService){

  }
   
 
  private submit(){
    this.showFormattedData = true;
  }
  

  hideData(data){
    this.showFormattedData = false;
  }
}
