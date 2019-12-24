import { Action } from '@ngrx/store';



export const SET_FILTRO = '[filter] set filtro'

export type filtrosValidos = "todos" | "pendientes" | "completados"

export class setFiltroAction implements Action{
    readonly type = SET_FILTRO;
    constructor (public filtro:filtrosValidos){}
}

export type acciones = setFiltroAction