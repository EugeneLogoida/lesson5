import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  public nTask!:string;

  public taskListi: any[] = [
    {task: 'HTML5', status:true, isDone: 'Done'}, 
    {task: 'CSS3', status:true, isDone: 'Done'}, 
    {task: 'JS', status:false, isDone: 'Progress'}, 
    {task: 'Angular', status:false, isDone: 'Progress'}
  ];

  constructor() { }

  ngOnInit(): void {
  }
  

  addTask(): void{
    let newT = {task: this.nTask, status:false, isDone: 'Progress'};
    this.taskListi.push(newT);
    this.nTask = '';
  }
  
}

