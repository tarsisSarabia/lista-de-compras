import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'despesas-mensais-app';
  coords: any;
  currentDate: Date;

  constructor() {
    this.currentDate = new Date();
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) =>{
      this.coords = position.coords;
    });

    setInterval(() =>{
      this.currentDate = new Date();
    }, 1000);

  }
  @ViewChild('mobile') sidNave?: ElementRef;

  ngAfterViewInit():void{
    M.Sidenav.init(this.sidNave?.nativeElement);
  }

}


