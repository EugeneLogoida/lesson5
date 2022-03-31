import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  public login!: string;
  public password!: string;
  public email!: string;
  public editStatus = false;
  public userList: any[] = []

  public index!:number;


  constructor() { }

  ngOnInit(): void {
  }

  addUser(): void{
    const user = {
      login: this.login,
      password: this.password,
      email: this.email
    }

    this.login = '';
    this.password = '';
    this.email = '';

    this.userList.push(user);
    
  }
  
  editUser(i:number): void {
    this.editStatus = !this.editStatus;

    this.login = this.userList[i].login;
    this.password = this.userList[i].password;
    this.email = this.userList[i].email;

    this.index = i; 
  }
  saveEditUser(): void{
    this.editStatus = !this.editStatus;

    this.userList[this.index] = {
      login: this.login,
      password:this.password,
      email: this.email
    };
    this.login = '';
    this.password = '';
    this.email = '';
  }
  deleteUser(i:number): void {
    this.userList.splice(i, 1);
  }
}
