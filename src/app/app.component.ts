import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  public taskList:any[]=[];
  public addTask(item:string)
  {
    this.taskList.push({id:this.taskList.length,name:item})
  }
}
