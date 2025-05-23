import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightedCompletedTodoDirective } from '../../directives/highlighted-completed-todo.directive';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightedCompletedTodoDirective],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
 todo = input.required<Todo>();
 todoToggled = output<Todo>();

 todoClicked() {
    this.todoToggled.emit(this.todo());
  }

}
