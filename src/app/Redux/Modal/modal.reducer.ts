import { Action } from '@ngrx/store';
import { ProcessServices } from '../../Services/ProcessServices';
import { RELLENAR, VACIAR } from './modal.action';

const initia = {
    lista: []
};

export function ModalReducer(state = initia, actins: Action) {
    switch (actins.type) {

        case RELLENAR:
            return {

                ...state
            }


        case VACIAR:
            return {
                ...state
            }
        default:
            return state;
    }
}