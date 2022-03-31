import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() newTask!: string;
  @Input() taskList!: any[];

  public taskName!:string;
  public changePos: boolean = false;

  public index!:number;
  constructor() { }

  ngOnInit(): void {
  }

  editUser(i:number): void {
    console.log(this.taskList[i].task);
    this.taskName = this.taskList[i].task;
    this.changePos = true;
    this.index = i; 
  }
  deleteUser(i:number): void {
    this.taskList.splice(i, 1);
  }
  w(i:number):void{
    this.taskList[i].status = !this.taskList[i].status; 
    if(this.taskList[i].status == false) {
      this.taskList[i].isDone = 'Progress';
    }
    else this.taskList[i].isDone = 'Done';
  }

  saveBtn():void{
    this.changePos = false;
    this.taskList[this.index].task = this.taskName ;

  }

  
}
