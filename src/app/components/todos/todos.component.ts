import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'TODO ONE',
        compleated: false
      },
      {
        id: 2,
        title: 'TODO TWO',
        compleated: true
      },
      {
        id: 3,
        title: 'TODO THREE',
        compleated: false
      }
    ];
  }

}
