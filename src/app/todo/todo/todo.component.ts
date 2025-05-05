import { Component, computed, inject, linkedSignal, signal, Signal } from "@angular/core";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TodoService } from "../service/todo.service";
import { Todo } from "../model/todo";
import { CvService } from "src/app/cv/services/cv.service";
import { ToastrService } from "ngx-toastr";

import { FormsModule } from "@angular/forms";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
  imports: [FormsModule, NgClass],
})
export class TodoComponent {
  selectTodo(todo: Todo) {
    this.selectedTodo.set(todo);
  }
  todoService = inject(TodoService);
  cvService = inject(CvService);
  toastr = inject(ToastrService);
  todos = this.todoService.getTodos();
  todo = signal<Todo>(new Todo());
  selectedTodo = linkedSignal<Todo[], Todo | null>({
    source: this.todos,
    computation: (todos, prevSelectedTodo) => {
      if (!this.todos.length || ! prevSelectedTodo || !prevSelectedTodo.value) return null;
      else if (!todos.includes(prevSelectedTodo.value)) return null;
      return prevSelectedTodo.value;
    },
  });
  constructor() {
    // this.cvService.selectedCv$
    //   .pipe(takeUntilDestroyed())
    //   .subscribe((cv) =>
    //     this.toastr.warning('on t as sélectionné on t a sélectionné')
    //   );
    // this.todoService.getTodosFromApi().subscribe({
    //   next: (todos) => {
    //     console.log({ todos });
    //   },
    // });
  }

  addTodo() {
    this.todoService.addTodo(this.todo());
    this.todo.set(new Todo());
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
