import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('mobile') sidNave?: ElementRef;


  ngAfterViewInit():void{
    M.Sidenav.init(this.sidNave?.nativeElement);
  }
}
