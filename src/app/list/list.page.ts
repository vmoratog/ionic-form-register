import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public users = [];
  constructor() {
  }

  ngOnInit() {
    this.users = JSON.parse(localStorage.users || '[]')
  }

  removeUser(index) {
    this.users.splice(index, 1)
    localStorage.users = JSON.stringify(this.users)
  }
}
