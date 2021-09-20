import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as countdown from 'countdown';
import { interval } from 'rxjs';
import { isString } from 'util';


interface Time{
  hours: number,
  minutes: number,
  seconds: number,
  days: string
}

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() date : any | string;

  OnChanges: any;
 
  time: any = null; 
  timerId: any = null;


  constructor() { }

  

  ngOnInit(): void {
    if(isString(this.date)){
      this.date = new Date(this.date);
    }

    this.timerId = countdown(this.date,(ts)=>{
      this.time = ts;
    }, countdown.DAYS |countdown.HOURS | countdown.MINUTES | countdown.SECONDS);
  }
  ngDoCheck(){
    
    if (this.time.value >= 0){
      clearInterval(this.timerId);
      this.time.days = 0;
      this.time.seconds = 0;
      this.time.minutes = 0;
      this.time.hours = 0;
    }
  }

}
