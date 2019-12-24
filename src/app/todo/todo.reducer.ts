import { Todo } from './model/todo.model';
import * as fromTodo from "./todo.actions";

const todo1 = new Todo('salvar el trabajo');
const todo2 = new Todo('aprender mucho');

todo2.completado = true;
const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Todo[] {
    //console.log(state.todos);

    switch (action.type) {
        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [...state, todo];
        case fromTodo.TOGGLE_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return { ...todoEdit, completado: !todoEdit.completado }
                } else {
                    return todoEdit
                }
            });
        case fromTodo.TOGGLE_ALL_TODO:
            return state.map(todoEdit => {
                return { ...todoEdit, completado: action.completado }

            });
        case fromTodo.EDIT_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return { ...todoEdit, texto: action.texto }
                } else {
                    return todoEdit
                }
            });
        case fromTodo.DELETE_TODO:
            return state.filter(todoDelete => todoDelete.id !== action.id);
        case fromTodo.DELETE_TODO_COMPLET:
            return state.filter(todo => !todo.completado );
        default:
            return state;
    }
}
