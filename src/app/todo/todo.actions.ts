import { Action } from "@ngrx/store";

export const AGREGAR_TODO = "[TODO] Agregar todo";
export const TOGGLE_TODO = "[TODO] Check todo";
export const TOGGLE_ALL_TODO = "[TODO] Check ALL todo";
export const EDIT_TODO = "[TODO] editar todo";
export const DELETE_TODO = "[TODO] borrar todo";
export const DELETE_TODO_COMPLET = "[TODO] borrar_todos todos";


export class AgregarTodoAction implements Action{
    readonly type = AGREGAR_TODO;
    constructor(public texto:string){}
}

export class ToggleTodoAction implements Action{
    readonly type = TOGGLE_TODO;
    constructor(public id:number){}

}
export class ToggleAllTodoAction implements Action{
    readonly type = TOGGLE_ALL_TODO;
    constructor(public completado:boolean){}

}
export class EditTodoAction implements Action{
    readonly type = EDIT_TODO;
    constructor(public texto:string, public id:number){}
}
export class DeleteTodoAction implements Action{
    readonly type = DELETE_TODO;
    constructor(public id:number){}
}
export class DeleteTodoCompletadosAction implements Action{
    readonly type = DELETE_TODO_COMPLET
}
export type Acciones = AgregarTodoAction |
                       DeleteTodoAction |
                       DeleteTodoCompletadosAction |
                       ToggleTodoAction |
                       ToggleAllTodoAction |
                       EditTodoAction
