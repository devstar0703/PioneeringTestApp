import ActionTypes from '../actions/actionTypes' ;

const INITIAL_STATE = {
    
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=INITIAL_STATE , action={}) => {
    switch(action.type) {
        case ActionTypes.ConnectRedux :
            return ({
                ...state , 
            }) ;
       
        default :
            return state ; 
    }
}