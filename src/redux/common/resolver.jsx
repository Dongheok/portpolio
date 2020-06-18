//--------------------------------------------------
import model from './model';

//--------------------------------------------------

const resolver = (state = model, action) => {
    // console.log(`rejected : +${Date.now() - startTime}ms`, action);

    switch (action.type) {
        case 'IS_LOADING':
            return {
                ...state,
                isLoading: action.input.isLoading,
            };
        case 'CURRENT_PAGE':
            return {
                ...state,
                pageKey: action.input.pageKey,
            };
        case 'MOVE_PAGE':
            return {
                ...state,
                pageKey: action.input.pageKey,
            };
        default:
            return state;
    }
};

export default resolver;
