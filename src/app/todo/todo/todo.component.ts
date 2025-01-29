import { Component, inject } from "@angular/core";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TodoService } from "../service/todo.service";
import { Todo } from "../model/todo";
import { CvService } from "src/app/cv/services/cv.service";
import { ToastrService } from "ngx-toastr";

import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
    providers: [TodoService],
    standalone: true,
    imports: [FormsModule]
})
export class TodoComponent {
  todoService = inject(TodoService);
  cvService = inject(CvService);
  toastr = inject(ToastrService)
  todos: Todo[] = this.todoService.getTodos();
  todo = new Todo();
  constructor() {
    this.cvService.selectedCv$
    .pipe(takeUntilDestroyed())
    .subscribe(
      (cv) => this.toastr.warning('on t as sélectionné on t a sélectionné')
    )
    this.todoService.getTodosFromApi().subscribe({
      next: todos => {
        console.log({todos});

      }
    })
  }

  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
