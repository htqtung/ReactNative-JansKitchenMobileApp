import { database } from "../../config/firebase";
import * as api from './api';
import * as t from './actionTypes';

//Create recipe
export function createRecipe(recipe, successCB, errorCB) {
    return (dispatch) => {
        api.createRecipe(recipe, function (success, data, error) {
            if (success) {
                dispatch({ type: t.CREATE_RECIPE, data: recipe });
                successCB();
            } else if (error) errorCB(error)
        });
    };
}