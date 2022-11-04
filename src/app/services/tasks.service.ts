import { Injectable } from '@angular/core';

class Task {
  title: String;
}

@Injectable()
export class TasksService {
  //Array de Task's, iniciando vazio
  private tasks: Task[] = [];

  constructor() {}

  add(title: string) {
    this.tasks.push({ title });
  }

  remove(index: number) {
    this.tasks.splice(index, 1);
  }

  getList() {
    return this.tasks;
  }
}
