import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Intern-Day01';
  email = 'Dùng [(ngModel)]';
  fullName = 'Dùng Event Binding';
  userName = '';
  
  onKey($event:any){
    this.userName = $event.target.value;
  }
  handleFullName():void{
    this.fullName = this.userName;
  }
}


