import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
// import { NgIf } from '@angular/common'; // recent upgrade in the angular 

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {

  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    // console.log(this.todoService.todoItems);
    // this.todoItems.set(this.todoService.todoItems);
    this.todoService.getTodoFromApi().pipe(
      catchError((err) => {
console.log(err);
throw err;
      }

      )
    ).subscribe((todos) =>{
      this.todoItems.set(todos);
    });
  }
 updateTodoItem(todoItem: Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  }
}
