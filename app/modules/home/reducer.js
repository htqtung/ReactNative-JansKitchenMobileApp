import { AsyncStorage } from 'react-native';
import * as t from './actionTypes';

let initialState = { recipe: null };

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.CREATE_RECIPE:
            const recipe = action.data;

            // Save token and data to Asyncstorage
            AsyncStorage.multiSet([
                ['recipe', JSON.stringify(recipe)]
            ]);

            state = Object.assign({}, state, { recipe: recipe });
            return state;

        // case t.LOGGED_OUT:
        //     let keys = ['user'];
        //     AsyncStorage.multiRemove(keys);

        //     state = Object.assign({}, state, { isLoggedIn: false, user: null });

        //     return state;

        default:
            return state;
    }
};

export default homeReducer;