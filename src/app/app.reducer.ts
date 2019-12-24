import { Todo } from './todo/model/todo.model';
import { filtrosValidos } from "./filter/filter.actions";

export interface AppState{
    todos: Todo[];
    filtro : filtrosValidos;
}