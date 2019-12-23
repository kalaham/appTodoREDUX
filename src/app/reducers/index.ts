import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { todoReducer } from '../todo/todo.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
todos: todoReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
