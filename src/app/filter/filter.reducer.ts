import * as fromfiltro from "./filter.actions";

const stateInicial: fromfiltro.filtrosValidos = "todos";

export function filtroReducer(state = stateInicial, 
                              accion: fromfiltro.acciones): fromfiltro.filtrosValidos {
    switch (accion.type) {
        case fromfiltro.SET_FILTRO:
            return accion.filtro;
        default:
            return state;
    }
}