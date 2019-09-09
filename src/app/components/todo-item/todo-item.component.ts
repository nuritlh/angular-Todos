import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../modules/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      todo: true,
      'is-copmleted': this.todo.completed
    };
    return classes;
  }

  onToggle(todo) {
    todo.completed = !todo.completed;
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log('onToggle', todo);
    });
  }
  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
