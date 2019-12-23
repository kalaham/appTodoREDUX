import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos:Todo[] =[]

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => { 
      console.log(state);      
      this.todos = state.todos
     });
  }
}
