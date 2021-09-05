import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service'; 
import { CharacterI } from '../../models/list.interface'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  character: CharacterI[];
  

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    this.dataSvc.getAllCharacter().subscribe(data=>{
      this.character = data;
    });
  }

}
