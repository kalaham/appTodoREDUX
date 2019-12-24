import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { ToggleTodoAction, EditTodoAction, DeleteTodoAction } from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputFisico', { static: true }) txtFisico: ElementRef;

  chkField: FormControl;
  txtInput: FormControl;
  editando: boolean;

  constructor(public store:Store<AppState>) { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkField.valueChanges.subscribe(() => { 
      const accion = new ToggleTodoAction(this.todo.id)
      this.store.dispatch(accion);
     })
  }

  editar(){
    this.editando=true;
    setTimeout(() => {
      this.txtFisico.nativeElement.select()
    }, 1);
  }

  acabarEdicion(){
    this.editando=false

    if (this.txtInput.invalid) {
      return;
    }

    if (this.txtInput.value === this.todo.texto) {
      return;
    }
    
    const accion = new EditTodoAction(this.txtInput.value, this.todo.id )
    this.store.dispatch(accion);
  }

  deleteTodo(){
    const accion= new DeleteTodoAction(this.todo.id);
    this.store.dispatch(accion)
  }

}
