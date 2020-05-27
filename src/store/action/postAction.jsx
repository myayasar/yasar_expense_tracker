import {UPDATE_EXPENCE,DELETE_UPDATE_EXPENCE} from "../types";

export const updateExpence = (payload) => dispatch => {
    dispatch({type:UPDATE_EXPENCE,payload});
};
export const deleteUpdateExpence = (payload) => dispatch => {
    dispatch({type:DELETE_UPDATE_EXPENCE,payload});
};