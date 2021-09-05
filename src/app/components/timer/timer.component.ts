import { Component, OnInit, Input } from '@angular/core';
import * as countdown from 'countdown';
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
  time : Time = null; 
  timerId : number = null;

  @Input() date : Date | string;

  constructor() { }

  ngOnInit(): void {
    



    if(isString(this.date)){
      this.date = new Date(this.date);
    }

    this.timerId = countdown(this.date,(ts)=>{
      this.time = ts;
    }, countdown.DAYS |countdown.HOURS | countdown.MINUTES | countdown.SECONDS)


  }

  ngOnDestroy(){
    if(this.timerId){
      clearInterval(this.timerId);
    }
  }

  

}
