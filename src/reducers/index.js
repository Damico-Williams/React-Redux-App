import { FETCHING_ANIME_START, FETCHING_ANIME_SUCCESS} from "../actions";
import { FETCHING_POKEMON_START, FETCHING_POKEMON_SUCCESS} from "../actions";

const initialState = {
    anime: [],
    nowLoading: false,
    error: ""
};

export const theReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_ANIME_START:
            return {
                ...state,
                nowLoading: true,
                error: ""
            };
        case FETCHING_ANIME_SUCCESS:
            return {
                ...state,
                nowLoading: false,
                anime: action.payload
            };
            default:
                return state;
    }
}

const secondinitialState = {
    pokemon: [],
    nowLoading: false,
    error: ""
};

export const secondtheReducer = (state = secondinitialState, action) => {
    switch (action.type) {
        case FETCHING_POKEMON_START:
            return {
                ...state,
                nowLoading: true,
                error: ""
            };
        case FETCHING_POKEMON_SUCCESS:
            return {
                ...state,
                nowLoading: false,
                pokemon: action.payload
            };
            default:
                return state;
    }
}