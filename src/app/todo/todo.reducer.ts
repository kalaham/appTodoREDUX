import { Todo } from './model/todo.model';
import * as fromTodo from "./todo.actions";

const todo1 = new Todo('salvar el trabajo');
const todo2 = new Todo('aprender mucho');

const estadoInicial: Todo[] = [ todo1, todo2];

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Todo[] {
    //console.log(state.todos);
    
    switch (action.type) {
        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return[...state, todo]

        default:
            return state;
    }
}
