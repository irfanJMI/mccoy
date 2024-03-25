
import * as storeActions from './app.actions'
const initialState: any = {
}

export function reducer(state: any[] = [initialState], action: storeActions.Actions) {
    switch(action.type) {
        case 'Filter Data':
            localStorage.setItem('state',JSON.stringify({...state, data:action.payload}))
            return {...state, data:action.payload};

        default:
            const local = localStorage.getItem('state')||'{}'
            const data = JSON.parse(local?local:'');
            return {...data}
    }
}
