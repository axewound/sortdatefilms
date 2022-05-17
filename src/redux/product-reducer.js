import {usersAPI} from "../api/api";
import React from "react";

const SET_PRODUCT = 'SET_PRODUCT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_DATA = 'SET_DATA';


let initialState = {
    products: [],
    textData: ""
};


const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {
                ...state,
            products: action.profile
            }
        }
        case SET_PRODUCT: {
            return {...state,  }
        }
        case SET_DATA: {
            return {...state,
                       textData:action.profile._d.toLocaleDateString("en-CA"),
            }
        }
        default:
            return state;
    }
}

export const setProduct = (products) => ({type: SET_PRODUCT, products})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setData = (profile) => ({type: SET_DATA, profile})

export const getProductThunk = () => {
    return (dispatch) => {
        usersAPI.getUsers().then(data => {
            dispatch(setProduct(data));
        });
    }
}
export const getUserProfile = (airdate) => (dispatch) => {
    usersAPI.getProfile(airdate).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export default productReducer;