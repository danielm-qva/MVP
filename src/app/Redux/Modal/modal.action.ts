import { Action } from '@ngrx/store';

export const RELLENAR  = 'RELLENAR' ;
export const VACIAR  = 'VACIAR' ;


export class FillActions implements Action {
     readonly type = RELLENAR ;
}

export class RemoveActions implements Action {
    readonly type = VACIAR ;
}